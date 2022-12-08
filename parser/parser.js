import { nodeHistory } from "./nodehistory.js";

const buildNumber = 36331;

var skillJSON = "";
$.getJSON("tree/build-" + buildNumber + ".json", null, successData => {
	skillJSON = successData;
	$("#debugOutput").html("Successfully loaded `tree/build-" + buildNumber + ".json`.");
	// call runParser once after loading so fixJSON affects node connections recursively
	runParser(false);
});

const scaleRatio = 0.5;

const rootNodeNames = {
	["Barbarian"]: {
		[0]: "Ultimate",
		[1]: "Weapon Mastery",
		[2]: "Brawling",
		[3]: "Defensive",
		[4]: "Core",
		[5]: "Basic",
		[6]: "Capstone"
	},
	["Druid"]: {
		[0]: "Basic",
		[1]: "Spirit",
		[2]: "Defensive",
		[3]: "Companion",
		[4]: "Wrath",
		[5]: "Ultimate",
		[6]: "Capstone"
	},
	["Necromancer"]: {
		[0]: "Basic",
		[1]: "Capstone",
		[2]: "Core",
		[3]: "Corruption",
		[4]: "Summoning",
		[5]: "Ultimate",
		[6]: "Macabre"
	},
	["Rogue"]: {
		[0]: "Capstone",
		[1]: "Imbuements",
		[2]: "Agility",
		[3]: "Core",
		[4]: "Basic",
		[5]: "Ultimate",
		[6]: "Subterfuge"
	},
	["Sorcerer"]: {
		[0]: "Conjuration",
		[1]: "Ultimate",
		[2]: "Mastery",
		[3]: "Basic",
		[4]: "Capstone",
		[5]: "Defensive",
		[6]: "Core"
	},
}

const rootNodeNamesSorted = {
	["Barbarian"]: {
		[0]: "Basic",
		[1]: "Core",
		[2]: "Defensive",
		[3]: "Brawling",
		[4]: "Weapon Mastery",
		[5]: "Ultimate",
		[6]: "Capstone"
	},
	["Druid"]: {
		[0]: "Basic",
		[1]: "Spirit",
		[2]: "Defensive",
		[3]: "Companion",
		[4]: "Wrath",
		[5]: "Ultimate",
		[6]: "Capstone"
	},
	["Necromancer"]: {
		[0]: "Basic",
		[1]: "Core",
		[2]: "Macabre",
		[3]: "Corruption",
		[4]: "Summoning",
		[5]: "Ultimate",
		[6]: "Capstone",
	},
	["Rogue"]: {
		[0]: "Basic",
		[1]: "Core",
		[2]: "Agility",
		[3]: "Subterfuge",
		[4]: "Imbuements",
		[5]: "Ultimate",
		[6]: "Capstone",
	},
	["Sorcerer"]: {
		[0]: "Basic",
		[1]: "Core",
		[2]: "Defensive",
		[3]: "Conjuration",
		[4]: "Mastery",
		[5]: "Ultimate",
		[6]: "Capstone",
	},
}

let classProcessed = [];
let fixedJSON = false;

function namedConnections(rawConnections, currentNode, classData, fallbackNode) {
	let namedConnections = "";
	rawConnections.forEach(connectedNode => {
		if (classData["Nodes"][connectedNode]["SkillName"] == null) {
			if (namedConnections.length > 0) namedConnections += ", ";
			namedConnections += '"' + fallbackNode + '"';
		} else if (classData["Nodes"][connectedNode]["SkillName"] != currentNode) {
			if (namedConnections.length > 0) namedConnections += ", ";
			namedConnections += '"' + classData["Nodes"][connectedNode]["SkillName"] + '"';
		}
	});
	if (namedConnections.length > 0) {
		return "[ " + namedConnections + " ]";
	} else {
		return '[ "' + fallbackNode + '" ]';
	}
}

function fixJSON(classData, curNode, rootNodeName) {
	const nodeData = classData["Nodes"][curNode];
	if (buildNumber == 36023 || buildNumber == 36331) {
		if (nodeData["SkillName"] == "Prime Unstable Currents" && nodeData["Id"] == 619) {
			$("#debugOutput").html($("#debugOutput").html() + "\nFixing nodeID " + nodeData["Id"] +"; SkillName: `" + nodeData["SkillName"] + "` -> `Supreme Unstable Currents`.");
			nodeData["SkillName"] = "Supreme Unstable Currents";
		} else if (nodeData["SkillName"] == "Upgrade 1" && nodeData["Id"] == 617) {
			$("#debugOutput").html($("#debugOutput").html() + "\nFixing nodeID " + nodeData["Id"] +"; SkillName: `" + nodeData["SkillName"] + "` -> `Prime Inferno`.");
			nodeData["SkillName"] = "Prime Inferno";
		} else if (nodeData["SkillName"] == "Upgrade 2" && nodeData["Id"] == 620) {
			$("#debugOutput").html($("#debugOutput").html() + "\nFixing nodeID " + nodeData["Id"] +"; SkillName: `" + nodeData["SkillName"] + "` -> `Supreme Inferno`.");
			nodeData["SkillName"] = "Supreme Inferno";
		} else if (nodeData["SkillName"] == "Enhanced Charged Bolt" && nodeData["Id"] == 731) {
			$("#debugOutput").html($("#debugOutput").html() + "\nFixing nodeID " + nodeData["Id"] +"; SkillName: `" + nodeData["SkillName"] + "` -> `Enhanced Charged Bolts`.");
			nodeData["SkillName"] = "Enhanced Charged Bolts";
		}
		if (nodeData["SkillName"] != undefined) {
			// ultimate skills don't have ranks
			if (rootNodeName == "Ultimate" && /cooldown:/i.test(nodeData["SkillDesc"]) && nodeData["Reward"]["dwMaxTalentRanks"] == 5) {
				$("#debugOutput").html($("#debugOutput").html() + "\nFixing nodeID " + nodeData["Id"] +"; SkillName: `" + nodeData["SkillName"] + "`; dwMaxTalentRanks: " + nodeData["Reward"]["dwMaxTalentRanks"] + " -> 1.");
				nodeData["Reward"]["dwMaxTalentRanks"] = 1;
			} else {
				const namedConnectionList = JSON.parse(namedConnections(nodeData["Connections"], nodeData["SkillName"], classData, rootNodeName));
				let chainedConnectionList = namedConnectionList;
				namedConnectionList.forEach(namedConnection => {
					classData["Nodes"].filter(chainedData => {
						if (chainedData["SkillName"] == namedConnection) {
							chainedConnectionList.push(...JSON.parse(namedConnections(chainedData["Connections"], chainedData["SkillName"], classData, rootNodeName)));
						}
					});
				});
				chainedConnectionList = [...new Set(chainedConnectionList)];
				const unmodifiedName = nodeData["SkillName"].split(" ").slice(1).join(" ");
				let unmodifiedNameSpecial = null;
				if (unmodifiedName == "Wolf Pack") {
					unmodifiedNameSpecial = "Wolves";
				} else if (unmodifiedName == "Stealth") {
					unmodifiedNameSpecial = "Concealment";
				}
				if (unmodifiedName.length > 0 && (chainedConnectionList.indexOf(unmodifiedName) != -1 || (unmodifiedNameSpecial != null && chainedConnectionList.indexOf(unmodifiedNameSpecial) != -1))) {
					if (nodeData["Reward"]["dwMaxTalentRanks"] == 3) {
						$("#debugOutput").html($("#debugOutput").html() + "\nFixing nodeID " + nodeData["Id"] +"; SkillName: `" + nodeData["SkillName"] + "`; dwMaxTalentRanks: " + nodeData["Reward"]["dwMaxTalentRanks"] + " -> 1.");
						nodeData["Reward"]["dwMaxTalentRanks"] = 1;
					}
					nodeData["baseSkillName"] = unmodifiedNameSpecial == null ? unmodifiedName : unmodifiedNameSpecial; // for reference later in recursiveSkillTreeScan
				}
			}
		}
	}
}

const MAX_RECURSION_DEPTH = 10;
function recursiveSkillTreeScan(connectionData, classData, className, rootNode, rootNodeName, mappedIDs, recursionDepth = 0) {
	let output = "";
	if (recursionDepth < MAX_RECURSION_DEPTH) {
		connectionData.forEach((connectedNode, connectedIndex) => {
			const nodeData = classData["Nodes"][connectedNode];
			if (!mappedIDs[nodeData["Id"]]) {
				mappedIDs[nodeData["Id"]] = true;
				if (!classProcessed[className]) fixJSON(classData, connectedNode, rootNodeName);
				output += '	["' + nodeData["SkillName"] + '"]: {\n';
				const baseSkillName = nodeData["baseSkillName"];
				if (baseSkillName != undefined) {
					output += '		baseSkill: "' + baseSkillName + '",\n';
				}
				output += "		connections: " + namedConnections(nodeData["Connections"], nodeData["SkillName"], classData, rootNodeName) + ",\n";
				// output damage type for any non-modifier skill nodes, as long as they have a hit or DoT payload
				if (baseSkillName == undefined && /{payload:.+?}|{dot:.+?}/i.test(nodeData["SkillDesc"]) && nodeData["DamageType"] >= 0) {
					output += "		damageType: " + nodeData["DamageType"] + ",\n";
				}
				output += "		description: `" + nodeData["SkillDesc"].trim() + "`,\n";
				const nodeHistoricalId = nodeHistory[className][rootNodeName + ": " + nodeData["SkillName"]];
				if (nodeHistoricalId != undefined) {
					output += "		id: " + nodeHistoricalId + ",\n";
				} else {
					const nodeHistoryLength = Object.keys(nodeHistory[className]).length;
					nodeHistory[className][rootNodeName + ": " + nodeData["SkillName"]] = nodeHistoryLength;
					output += "		id: " + nodeHistoryLength + ",\n";
				}
				output += "		maxPoints: " + nodeData["Reward"]["dwMaxTalentRanks"] + ",\n";
				output += "		x: " + parseFloat(((nodeData["X"] - rootNode["X"]) * scaleRatio).toFixed(3)) + ",\n";
				output += "		y: " + parseFloat(((nodeData["Y"] - rootNode["Y"]) * scaleRatio).toFixed(3)) + ",\n";
				output += "	},\n";
				output += recursiveSkillTreeScan(nodeData["Connections"], classData, className, rootNode, rootNodeName, mappedIDs, recursionDepth + 1);
			}
		});
	}
	return output;
}

function runParser(downloadMode) {
	console.clear();
	skillJSON.forEach((classData, classIndex) => {
		const className = classData["ClassName"];
		const classNameLower = className.toLowerCase();
		if (!classProcessed[className]) {
			$("#debugOutput").html($("#debugOutput").html() + "\nProcessing node data for class `" + className + "`:");
		}

		const rootNodes = classData["Nodes"].filter(curNode => curNode["RootNode"]);
		const originNode = rootNodes.find((curNode, curIndex) => rootNodeNames[className][curIndex] == "Basic");

		let formattedData = "let " + classNameLower + " = {};\n\n";
		formattedData += classNameLower + '["Trunk Data"] = {\n';
		for (let i = 0; i < Object.keys(rootNodeNamesSorted[className]).length; i++) {
			rootNodes.forEach((rootNode, rootIndex) => {
				const rootNodeName = rootNodeNames[className][rootIndex];
				if (rootNodeName == rootNodeNamesSorted[className][i]) {
					formattedData += '	["' + rootNodeName + '"]: {\n';
					const nextRootNode = rootNodeNamesSorted[className][i + 1];
					if (nextRootNode && nextRootNode.length != undefined) {
						formattedData += '		connections: [ "' + nextRootNode + '" ],\n';
					}
					if (rootNode["ReqPointsSpent"] > 0) {
						formattedData += "		requiredPoints: " + rootNode["ReqPointsSpent"] + ",\n";
					}
					formattedData += "		x: " + parseFloat(((rootNode["X"] - originNode["X"]) * scaleRatio).toFixed(3)) + ",\n";
					formattedData += "		y: " + parseFloat(((rootNode["Y"] - originNode["Y"]) * scaleRatio).toFixed(3)) + ",\n";
					formattedData += "	},\n";
				}
			});
		}
		formattedData += "};\n\n";

		for (let i = 0; i < Object.keys(rootNodeNamesSorted[className]).length; i++) {
			rootNodes.forEach((rootNode, rootIndex) => {
				const rootNodeName = rootNodeNames[className][rootIndex];
				if (rootNodeName == rootNodeNamesSorted[className][i]) {
					let mappedIDs = [];
					mappedIDs[rootNode["Id"]] = true;

					formattedData += classNameLower + '["' + rootNodeNames[className][rootIndex] + '"] = {\n';
					formattedData += recursiveSkillTreeScan(rootNode["Connections"], classData, className, rootNode, rootNodeName, mappedIDs, 0);
					formattedData += "};\n\n";
				}
			});
		}
		formattedData += "export { " + classNameLower + " };";
		if (fixedJSON) {
			if (downloadMode) {
				let downloadElement = document.createElement("a");
				downloadElement.href = "data:application/octet-stream," + encodeURIComponent(formattedData);
				downloadElement.download = classNameLower + ".js";
				downloadElement.click();
			} else {
				console.log(formattedData);
			}
		}
		classProcessed[className] = true;
	});
	if (fixedJSON) {
		let formattedNodeHistory = "let nodeHistory = ";
		formattedNodeHistory += JSON.stringify(nodeHistory, null, "\t");
		formattedNodeHistory += "\n\nexport { nodeHistory };";
		if (downloadMode) {
			let downloadElement = document.createElement("a");
			downloadElement.href = "data:application/octet-stream," + encodeURIComponent(formattedNodeHistory);
			downloadElement.download = "nodehistory.js";
			downloadElement.click();
		} else {
			console.log(formattedNodeHistory);
		}
	}
	fixedJSON = true;
}

$("#parseToFile").on("click", () => { runParser(true); });
$("#parseToConsole").on("click", () => { runParser(false); });