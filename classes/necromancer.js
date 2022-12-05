let necromancer = {};

necromancer["Trunk Data"] = {
	["Basic"]: {
		connections: [ "Core" ],
		x: 0,
		y: 0,
	},
	["Core"]: {
		connections: [ "Macabre" ],
		requiredPoints: 2,
		x: -2.353,
		y: 1135.79,
	},
	["Macabre"]: {
		connections: [ "Corruption" ],
		requiredPoints: 6,
		x: 1240.933,
		y: 2069.72,
	},
	["Corruption"]: {
		connections: [ "Summoning" ],
		requiredPoints: 11,
		x: 1241.038,
		y: 3005.145,
	},
	["Summoning"]: {
		connections: [ "Ultimate" ],
		requiredPoints: 16,
		x: -1135.477,
		y: 3007.775,
	},
	["Ultimate"]: {
		connections: [ "Capstone" ],
		requiredPoints: 23,
		x: -9.557,
		y: 4138.157,
	},
	["Capstone"]: {
		requiredPoints: 33,
		x: -11.71,
		y: 4933.965,
	},
};

necromancer["Basic"] = {
	["Decompose"]: {
		connections: [ "Enhanced Decompose", "Basic" ],
		description: `{c_label}Generate Essence:{/c_label} {c_resource}{SF_5}{/c_resource} per second
{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat_Effect_Chance_Script_Formula_Override:17}%{/c}
{/if}Tear the flesh from an enemy, dealing {c_number}{dot:DECOMPOSING}{/c} damage per second and forming a usable Corpse with the flesh every {c_number}[{SF_1}|1|]{/c} seconds.`,
		id: 0,
		maxPoints: 5,
		x: -302.458,
		y: -154.39,
	},
	["Enhanced Decompose"]: {
		baseSkill: "Decompose",
		connections: [ "Decompose", "Acolyte's Decompose", "Initiate's Decompose" ],
		description: `If an enemy dies while being Decomposed, you gain {c_number}{SF_7}{/c} Essence.`,
		id: 1,
		maxPoints: 1,
		x: -535.502,
		y: -276.92,
	},
	["Acolyte's Decompose"]: {
		baseSkill: "Decompose",
		connections: [ "Enhanced Decompose" ],
		description: `You and your Minions deal {c_number}x[{SF_12} * 100|%|]{/c} increased damage to enemies who are being {c_important}Decomposed{/c}.`,
		id: 2,
		maxPoints: 1,
		x: -852.607,
		y: -322.1,
	},
	["Initiate's Decompose"]: {
		baseSkill: "Decompose",
		connections: [ "Enhanced Decompose" ],
		description: `{c_important}Decompose{/c} Slows enemies by {c_number}[{SF_13} * 100|%|]{/c}.`,
		id: 3,
		maxPoints: 1,
		x: -629.022,
		y: -437.845,
	},
	["Reap"]: {
		connections: [ "Enhanced Reap", "Basic" ],
		description: `{c_label}Generate Essence:{/c_label} {c_resource}{SF_2}{/c_resource} per enemy hit
{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat Effect Chance}%{/c}
{/if}Sweep an ethereal scythe in front of you, dealing {c_number}{payload:DAMAGE}{/c} damage. Hitting an enemy with Reap increases your Damage Reduction by {c_number}[{SF_8}*100|%|]{/c} for {c_number}{buffduration:DAMAGE_REDUCTION}{/c} seconds.`,
		id: 4,
		maxPoints: 5,
		x: -276.92,
		y: 154.47,
	},
	["Enhanced Reap"]: {
		baseSkill: "Reap",
		connections: [ "Reap", "Initiate's Reap", "Acolyte's Reap" ],
		description: `If an enemy hit by Reap dies within {c_number}{SF_4}{/c} seconds, you gain {c_number}[{SF_5} * 100|%|]{/c} Attack Speed for {c_number}{SF_15}{/c} seconds.`,
		id: 5,
		maxPoints: 1,
		x: -519.257,
		y: 283.565,
	},
	["Initiate's Reap"]: {
		baseSkill: "Reap",
		connections: [ "Enhanced Reap" ],
		description: `Reap instantly executes non-Bosses below {c_number}[{SF_7}*100|%|]{/c} Life.`,
		id: 6,
		maxPoints: 1,
		x: -850.547,
		y: 324,
	},
	["Acolyte's Reap"]: {
		baseSkill: "Reap",
		connections: [ "Enhanced Reap" ],
		description: `Reap forms a Corpse under the first enemy hit. Can only occur every {c_number}{buffduration:GENERATE_CORPSE_ICD}{/c} seconds.`,
		id: 7,
		maxPoints: 1,
		x: -599.482,
		y: 454.96,
	},
	["Hemorrhage"]: {
		connections: [ "Enhanced Hemorrhage", "Basic" ],
		description: `{c_label}Generate Essence:{/c_label} {c_resource}{SF_6}{/c_resource}
{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat Effect Chance}%{/c}
{/if}Burst an enemy's blood, dealing {c_number}{payload:DAMAGE}{/c} damage. Hemorrhage has a {c_number}[{SF_5}*100|%|]{/c} chance to form a {c_important}Blood Orb{/c}.`,
		id: 8,
		maxPoints: 5,
		x: 279.313,
		y: -153.68,
	},
	["Enhanced Hemorrhage"]: {
		baseSkill: "Hemorrhage",
		connections: [ "Hemorrhage", "Acolyte's Hemorrhage", "Initiate's Hemorrhage" ],
		description: `After picking up a {c_important}Blood Orb{/c}, your next Hemorrhage also deals damage to enemies around your target and grants {c_number}{SF_10}{/c} additional Essence per enemy hit.`,
		id: 9,
		maxPoints: 1,
		x: 515.388,
		y: -269.005,
	},
	["Acolyte's Hemorrhage"]: {
		baseSkill: "Hemorrhage",
		connections: [ "Enhanced Hemorrhage" ],
		description: `Hemorrhage gains an additional {c_number}[{SF_11} * 100|%|]{/c} Attack Speed while {c_important}Healthy{/c}.`,
		id: 10,
		maxPoints: 1,
		x: 848.648,
		y: -316.2,
	},
	["Initiate's Hemorrhage"]: {
		baseSkill: "Hemorrhage",
		connections: [ "Enhanced Hemorrhage" ],
		description: `Hemorrhage grants {c_number}[{SF_12}*100|1%|]{/c} Base Life {c_number}({fortified:MOD_FORTIFY}){/c} as {c_important}Fortify{/c} each time it hits an enemy, and has a {c_number}[{SF_13} * 100|1%|]{/c} chance per enemy hit to {c_important}Fortify{/c} you for {c_number}[100|%|]{/c} Base Life {c_number}({fortified:MOD_FULL_FORTIFY}){/c}.`,
		id: 11,
		maxPoints: 1,
		x: 618.878,
		y: -434.435,
	},
	["Bone Splinters"]: {
		connections: [ "Enhanced Bone Splinters", "Basic" ],
		description: `{c_label}Generate Essence:{/c} {c_resource}{SF_5}{/c}
{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat Effect Chance}%{/c}
{/if}Fire {c_number}3{/c} bone splinters, dealing {c_number}{payload:DAMAGE}{/c} damage each. Each subsequent time an enemy is hit by the same cast of Bone Splinters, you gain {c_number}{SF_4}{/c} Essence.`,
		id: 12,
		maxPoints: 5,
		x: 267.113,
		y: 153.42,
	},
	["Enhanced Bone Splinters"]: {
		baseSkill: "Bone Splinters",
		connections: [ "Bone Splinters", "Acolyte's Bone Splinters", "Initiate's Bone Splinters" ],
		description: `Bone Splinters has a {c_number}[{SF_10} * 100|%|]{/c} chance to fire {c_number}{SF_8}{/c} additional projectile if cast while you have {c_number}{SF_15}{/c} or more Essence.`,
		id: 13,
		maxPoints: 1,
		x: 502.278,
		y: 282.14,
	},
	["Acolyte's Bone Splinters"]: {
		baseSkill: "Bone Splinters",
		connections: [ "Enhanced Bone Splinters" ],
		description: `Hitting the same enemy at least {c_number}{SF_20}{/c} times with the same cast of Bone Splinters grants {c_number}[{SF_21} * 100|%|]{/c} Critical Strike Chance for {c_number}{SF_22}{/c} seconds.`,
		id: 14,
		maxPoints: 1,
		x: 598.598,
		y: 454.575,
	},
	["Initiate's Bone Splinters"]: {
		baseSkill: "Bone Splinters",
		connections: [ "Enhanced Bone Splinters" ],
		description: `Bone Splinters has a {c_number}[{SF_12} * 100|%|]{/c} chance per hit to make enemies {c_important}Vulnerable{/c} for {c_number}{SF_13}{/c} seconds.`,
		id: 15,
		maxPoints: 1,
		x: 843.398,
		y: 320.755,
	},
};

necromancer["Core"] = {
	["Blight"]: {
		connections: [ "Enhanced Blight", "Core" ],
		description: `{c_label}Essence Cost: {/c}{c_resource}{Resource Cost}{/c}
{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat_Effect_Chance_Script_Formula_Override:21}%{/c}
{/if}Unleash concentrated blight that deals {c_number}{payload:DAMAGE}{/c} damage and leaves behind a defiled area, dealing {c_number}{dot:TOOLTIP_DOT}{/c} damage over {c_number}{buffduration:TOOLTIP_DOT}{/c} seconds.`,
		id: 16,
		maxPoints: 5,
		x: -224.532,
		y: -184.935,
	},
	["Enhanced Blight"]: {
		baseSkill: "Blight",
		connections: [ "Blight", "Paranormal Blight", "Supernatural Blight" ],
		description: `Blight Slows enemies by {c_number}[{SF_15}*100|%|]{/c}.`,
		id: 17,
		maxPoints: 1,
		x: -450.974,
		y: -361.8,
	},
	["Paranormal Blight"]: {
		baseSkill: "Blight",
		connections: [ "Enhanced Blight" ],
		description: `{c_important}Blight{/c} has a {c_number}[{SF_16}*100|%|]{/c} chance to Immobilize enemies for {c_number}{buffduration:IMMOBILIZE}{/c} seconds on impact.`,
		id: 18,
		maxPoints: 1,
		x: -815.994,
		y: -416.965,
	},
	["Supernatural Blight"]: {
		baseSkill: "Blight",
		connections: [ "Enhanced Blight" ],
		description: `You and your Minions deal {c_number}x[{SF_18}*100|%|]{/c} increased damage to enemies within Blight.`,
		id: 19,
		maxPoints: 1,
		x: -489.679,
		y: -551.275,
	},
	["Sever"]: {
		connections: [ "Enhanced Sever", "Core" ],
		description: `{c_label}Essence Cost: {/c}{c_resource}{Resource Cost}{/c}
{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat Effect Chance}%{/c}
{/if}A specter of you charges forward and attacks with its scythe for {c_number}{payload:DAMAGE_OUT}{/c} damage then returns to you and attacks again for {c_number}{payload:DAMAGE_RETURN}{/c} damage.`,
		id: 20,
		maxPoints: 5,
		x: -411.075,
		y: 0.155,
	},
	["Enhanced Sever"]: {
		baseSkill: "Sever",
		connections: [ "Sever", "Paranormal Sever", "Supernatural Sever" ],
		description: `Sever damages enemies along its path for {c_number}[{SF_16} * 100|%|]{/c} of its damage.`,
		id: 21,
		maxPoints: 1,
		x: -768.379,
		y: 0.325,
	},
	["Paranormal Sever"]: {
		baseSkill: "Sever",
		connections: [ "Enhanced Sever" ],
		description: `Every {c_number}4th{/c} cast of Sever makes enemies {c_important}{u}Vulnerable{/u}{/c} for {c_number}[{SF_14}]{/c} seconds.`,
		id: 22,
		maxPoints: 1,
		x: -1102.254,
		y: -100.28,
	},
	["Supernatural Sever"]: {
		baseSkill: "Sever",
		connections: [ "Enhanced Sever" ],
		description: `Sever deals {c_number}x[{SF_13} * 100|%|]{/c} increased damage for each Minion you have upon cast.`,
		id: 23,
		maxPoints: 1,
		x: -1100.739,
		y: 97.62,
	},
	["Blood Surge"]: {
		connections: [ "Enhanced Blood Surge", "Core" ],
		description: `{c_label}Essence Cost: {/c}{c_resource}{Resource Cost}{/c}
{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat Effect Chance}%{/c}
{/if}Draw blood from enemies, dealing {c_number}{payload:OUTER_DAMAGE}{/c} damage, and expel a blood nova, dealing {c_number}{payload:INNER_DAMAGE}{/c} damage. Blood Surge's nova damage is increased by {c_number}x[{SF_1} * 100|%|]{/c} per enemy drained, up to {c_number}x[SF_6 * 100|%|]{/c}.`,
		id: 24,
		maxPoints: 5,
		x: 230.535,
		y: -185.16,
	},
	["Enhanced Blood Surge"]: {
		baseSkill: "Blood Surge",
		connections: [ "Blood Surge", "Supernatural Blood Surge", "Paranormal Blood Surge" ],
		description: `{c_important}Blood Surge{/c} heals you for {c_number}[{SF_12}*100|1%|]{/c} of your maximum Life when drawing blood from enemies. If {c_number}{SF_11}{/c} or more enemies are drawn from, then heal for an additional {c_number}[{SF_12}*100|1%|]{/c} of your maximum Life.`,
		id: 25,
		maxPoints: 1,
		x: 458.771,
		y: -363.255,
	},
	["Supernatural Blood Surge"]: {
		baseSkill: "Blood Surge",
		connections: [ "Enhanced Blood Surge" ],
		description: `Each time an enemy is hit by {c_important}Blood Surge's{/c} nova, you are {c_important}{u}Fortified{/u}{/c} for {c_number}[{SF_14}*100|%|]{/c} Base Life {c_number}({Fortified:FORTIFY_HEALTH}){/c}. While you are {c_important}{u}Fortified{/u}{/c} for over {c_number}[{SF_24}*100|%|]{/c} of your Maximum Life, {c_important}Blood Surge{/c} deals {c_number}[{SF_25}*100|%|]{/c} increased damage.`,
		id: 26,
		maxPoints: 1,
		x: 811.856,
		y: -414.23,
	},
	["Paranormal Blood Surge"]: {
		baseSkill: "Blood Surge",
		connections: [ "Enhanced Blood Surge" ],
		description: `If an enemy is damaged by {c_important}Blood Surge's{/c} nova while you are {c_important}{u}Healthy{/u}{/c}, then gain 1 stack of Overwhelming Blood. When you have 5 stacks of Overwhelming Blood, your next {c_important}Blood Surge{/c} {c_important}{u}Overpowers{/u}{/c}.`,
		id: 27,
		maxPoints: 1,
		x: 499.171,
		y: -552.28,
	},
	["Blood Lance"]: {
		connections: [ "Enhanced Blood Lance", "Core" ],
		description: `{c_label}Essence Cost:{/c} {c_resource}{Resource Cost}{/c}
{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat Effect Chance}%{/c}
{/if}Throw a blood lance that lingers in an enemy for {c_number}{buffduration:LANCED}{/c} seconds, dealing {c_number}{payload:DAMAGE}{/c} damage to the enemy and all other lanced enemies.`,
		id: 28,
		maxPoints: 5,
		x: 380.122,
		y: 38.46,
	},
	["Enhanced Blood Lance"]: {
		baseSkill: "Blood Lance",
		connections: [ "Blood Lance", "Supernatural Blood Lance", "Paranormal Blood Lance" ],
		description: `{c_important}Blood Lance{/c} Pierces through enemies who are currently lanced, dealing {c_number}[{SF_14} * 100|%|]{/c} reduced damage to subsequent enemies after the first.`,
		id: 29,
		maxPoints: 1,
		x: 726.711,
		y: 65.695,
	},
	["Supernatural Blood Lance"]: {
		baseSkill: "Blood Lance",
		connections: [ "Enhanced Blood Lance" ],
		description: `After casting {c_important}Blood Lance{/c} {c_number}{SF_10}{/c} times, your next cast of {c_important}Blood Lance{/c} is guaranteed to {c_important}{u}Overpower{/u}{/c} and spawns a {c_important}{u}Blood Orb{/u}{/c} under the first enemy hit.`,
		id: 30,
		maxPoints: 1,
		x: 985.341,
		y: 189.005,
	},
	["Paranormal Blood Lance"]: {
		baseSkill: "Blood Lance",
		connections: [ "Enhanced Blood Lance" ],
		description: `While at least {c_number}{SF_12}{/c} enemies or a Boss are affected by {c_important}Blood Lance{/c}, you gain {c_number}[{SF_13} * 100|%|]{/c} Attack Speed and {c_important}Blood Lance's{/c} Essence cost is reduced by {c_number}{SF_11}{/c}.`,
		id: 31,
		maxPoints: 1,
		x: 1055.921,
		y: 24.71,
	},
	["Bone Spear"]: {
		connections: [ "Enhanced Bone Spear", "Core" ],
		description: `{c_label}Essence Cost:{/c} {c_resource}{Resource Cost}{/c}
{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat Effect Chance}%{/c}
{/if}Conjure a bone spear from the ground, dealing {c_number}{payload:DAMAGE}{/c} damage and Piercing through enemies.`,
		id: 32,
		maxPoints: 5,
		x: -53.082,
		y: 204.585,
	},
	["Enhanced Bone Spear"]: {
		baseSkill: "Bone Spear",
		connections: [ "Bone Spear", "Paranormal Bone Spear", "Supernatural Bone Spear" ],
		description: `Bone Spear breaks into {c_number}{SF_6}{/c} shards when it is destroyed, dealing {c_number}{payload:BONE_SHARD}{/c} damage each.`,
		id: 33,
		maxPoints: 1,
		x: -106.376,
		y: 383.87,
	},
	["Paranormal Bone Spear"]: {
		baseSkill: "Bone Spear",
		connections: [ "Enhanced Bone Spear" ],
		description: `Bone Spear has a {c_number}[{SF_10}*100|%|]{/c} increased Critical Strike Chance. If Bone Spear's primary projectile Critically Strikes, it fires {c_number}{SF_7}{/c} additional bone shards upon being destroyed.`,
		id: 34,
		maxPoints: 1,
		x: -340.216,
		y: 524.725,
	},
	["Supernatural Bone Spear"]: {
		baseSkill: "Bone Spear",
		connections: [ "Enhanced Bone Spear" ],
		description: `Bone Spear makes the first enemy hit {c_important}{u}Vulnerable{/u}{/c} for {c_number}{SF_19}{/c} seconds.`,
		id: 35,
		maxPoints: 1,
		x: -15.686,
		y: 547.47,
	},
	["Unliving Energy"]: {
		connections: [ "Core", "Imperfectly Balanced" ],
		description: `Your maximum Essence is increased by {c_number}{SF_0}{/c}.`,
		id: 36,
		maxPoints: 3,
		x: 527.726,
		y: -113.765,
	},
	["Imperfectly Balanced"]: {
		connections: [ "Unliving Energy" ],
		description: `Your {c_important}Core{/c} Skills cost {c_number}[{SF_0} * 100|%|]{/c} more Essence, but deal {c_number}x[{SF_1} * 100|%|]{/c} increased damage.`,
		id: 37,
		maxPoints: 3,
		x: 889.681,
		y: -190.74,
	},
	["Reconstitution"]: {
		connections: [ "Core" ],
		description: `{c_label}Lucky Hit:{/c} Your damage has up to a {c_number}{SF_0}%{/c} chance to create a corpse at the target's location. 

This chance is doubled against bosses.`,
		id: 38,
		maxPoints: 3,
		x: -417.867,
		y: 186.82,
	},
};

necromancer["Macabre"] = {
	["Corpse Explosion"]: {
		connections: [ "Enhanced Corpse Explosion", "Macabre" ],
		description: `{if:SF_10}{c_label}Essence Cost:{/c} {c_resource}{Resource Cost}{/c}
{/if}{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat_Effect_Chance_Script_Formula_Override:20}%{/c}
{/if}{if:Mod.Miasma}Release a vile miasma from a Corpse, dealing {c_number}{dot:MIASMA_DOT_TOOLTIP}{/c} Shadow Damage over {c_number}{buffduration:MIASMA_DOT_TOOLTIP}{/c} seconds.{else}Detonate a Corpse, dealing {c_number}{payload:DAMAGE}{/c} damage to surrounding enemies.{/if}`,
		id: 39,
		maxPoints: 5,
		x: -385,
		y: 0.11,
	},
	["Enhanced Corpse Explosion"]: {
		baseSkill: "Corpse Explosion",
		connections: [ "Corpse Explosion", "Abhorrent Corpse Explosion", "Horrid Corpse Explosion" ],
		description: `Corpse Explosion's radius is increased by {c_number}[{SF_1}*100|%|]{/c}.`,
		id: 40,
		maxPoints: 1,
		x: -756.693,
		y: -0.91,
	},
	["Abhorrent Corpse Explosion"]: {
		baseSkill: "Corpse Explosion",
		connections: [ "Enhanced Corpse Explosion" ],
		description: `Instead of exploding, Corpse Explosion releases a vile miasma dealing {c_number}{dot:MIASMA_DOT_TOOLTIP}{/c} Shadow Damage over {c_number}{SF_12}{/c} seconds.`,
		id: 41,
		maxPoints: 1,
		x: -1048.735,
		y: -100.365,
	},
	["Horrid Corpse Explosion"]: {
		baseSkill: "Corpse Explosion",
		connections: [ "Enhanced Corpse Explosion" ],
		description: `Corpse Explosion deals {c_number}x[{SF_15}*100|%|]{/c} increased damage to enemies that are Slowed, Stunned or Vulnerable.`,
		id: 42,
		maxPoints: 1,
		x: -1046.376,
		y: 101.125,
	},
	["Grim Harvest"]: {
		connections: [ "Fueled by Death", "Macabre" ],
		description: `Consuming a Corpse generates {c_number}{SF_0}{/c} Essence.`,
		id: 43,
		maxPoints: 3,
		x: -370.215,
		y: 233.465,
	},
	["Fueled by Death"]: {
		connections: [ "Grim Harvest" ],
		description: `You deal {c_number}x[{SF_0} * 100|%|]{/c} increased damage for {c_number}{buffduration:DAMAGE_BONUS}{/c} seconds after consuming a Corpse.`,
		id: 44,
		maxPoints: 3,
		x: -632.315,
		y: 401.995,
	},
	["Necrotic Carapace"]: {
		connections: [ "Macabre" ],
		description: `When a Corpse is formed from your Skills or your Minions, {c_important}Fortify{/c} for {c_number}[{SF_0}*100|%|]{/c} Base Life {c_number}({fortified:PAYLOAD_FORTIFY}){/c}.`,
		id: 45,
		maxPoints: 3,
		x: 755.135,
		y: -138.065,
	},
	["Blood Mist"]: {
		connections: [ "Enhanced Blood Mist", "Macabre" ],
		description: `{c_label}Cooldown:{/c_label} {c_resource}[{Cooldown Time}|1|]{/c_resource} seconds
{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat_Effect_Chance_Script_Formula_Override:14}%{/c}
{/if}Disperse into a bloody mist, becoming {c_important}Immune{/c} for {c_number}{buffduration:MISTFORM}{/c} seconds. Your Movement Speed is reduced by {c_number}[{SF_6}*100|%|]{/c} and you periodically deal {c_number}{payload:LEECH_DAMAGE}{/c} damage to enemies, healing for {c_number}[{SF_3} * 100|%|]{/c} of the damage dealt.`,
		id: 46,
		maxPoints: 5,
		x: 79.31,
		y: -196.6,
	},
	["Enhanced Blood Mist"]: {
		baseSkill: "Blood Mist",
		connections: [ "Blood Mist", "Ghastly Blood Mist", "Dreadful Blood Mist" ],
		description: `Blood Mist's Movement Speed penalty is reduced to {c_number}[{SF_13} * 100|%|]{/c}.`,
		id: 47,
		maxPoints: 1,
		x: 141.245,
		y: -354.24,
	},
	["Ghastly Blood Mist"]: {
		baseSkill: "Blood Mist",
		connections: [ "Enhanced Blood Mist" ],
		description: `Blood Mist leaves behind a Corpse every {c_number}{SF_10}{/c} second.`,
		id: 48,
		maxPoints: 1,
		x: 118.76,
		y: -537.495,
	},
	["Dreadful Blood Mist"]: {
		baseSkill: "Blood Mist",
		connections: [ "Enhanced Blood Mist" ],
		description: `Blood Mist {c_important}Fortifies{/c} you for {c_number}[{SF_9}*100|1%|]{/c} Base Life {c_number}({Fortified:FORTIFY_HEALTH}){/c} each time it hits an enemy.`,
		id: 49,
		maxPoints: 1,
		x: 394.43,
		y: -496.67,
	},
	["Bone Prison"]: {
		connections: [ "Enhanced Bone Prison", "Macabre" ],
		description: `{c_label}Cooldown:{/c_label} {c_resource}[{Cooldown Time}|1|]{/c_resource} seconds
Unearth a prison of bone with {c_number}{pet_health:BoneWall}{/c} Life that surrounds the target area for {c_number}{buffduration:WALL_TRACKER}{/c} seconds.`,
		id: 50,
		maxPoints: 5,
		x: 271.91,
		y: 145.285,
	},
	["Enhanced Bone Prison"]: {
		baseSkill: "Bone Prison",
		connections: [ "Bone Prison", "Ghastly Bone Prison", "Dreadful Bone Prison" ],
		description: `Gain {c_number}{SF_3}{/c} Essence each time an enemy hits your Bone Prison.`,
		id: 51,
		maxPoints: 1,
		x: 497.525,
		y: 268.625,
	},
	["Ghastly Bone Prison"]: {
		baseSkill: "Bone Prison",
		connections: [ "Enhanced Bone Prison" ],
		description: `Enemies inside of Bone Prison are {c_important}Vulnerable{/c}.`,
		id: 52,
		maxPoints: 1,
		x: 605.505,
		y: 435.61,
	},
	["Dreadful Bone Prison"]: {
		baseSkill: "Bone Prison",
		connections: [ "Enhanced Bone Prison" ],
		description: `Fortify for {c_number}[{SF_7}*100|%|]{/c} Base Life {c_number}({fortified:MODB_FORTIFY}){/c} for each enemy trapped by Bone Prison.`,
		id: 53,
		maxPoints: 1,
		x: 834.045,
		y: 309.03,
	},
	["Skeletal Warrior Mastery"]: {
		connections: [ "Macabre" ],
		description: `Increase the damage and Life of your Skeletal Warriors by {c_number}[{SF_0} * 100|%|]{/c} .`,
		id: 54,
		maxPoints: 3,
		x: 755.34,
		y: 67.235,
	},
};

necromancer["Corruption"] = {
	["Iron Maiden"]: {
		connections: [ "Enhanced Iron Maiden", "Corruption" ],
		description: `{c_label}Essence Cost: {/c}{c_resource}{Resource Cost}{/c}
Curse the target area. Enemies afflicted by Iron Maiden take {c_number}{payload:CURSE_DAMAGE}{/c} damage each time they deal direct damage. Lasts {c_number}{buffduration:IRONMAIDEN_CURSE}{/c} seconds.`,
		id: 55,
		maxPoints: 5,
		x: -312.7,
		y: 165.29,
	},
	["Enhanced Iron Maiden"]: {
		baseSkill: "Iron Maiden",
		connections: [ "Iron Maiden", "Horrid Iron Maiden", "Abhorrent Iron Maiden" ],
		description: `Iron Maiden no longer costs Essence. Instead, gain {c_number}{SF_6}{/c} Essence for each enemy Cursed. Does not work with enemies who are already cursed with Iron Maiden.`,
		id: 56,
		maxPoints: 1,
		x: -561.73,
		y: 297.35,
	},
	["Horrid Iron Maiden"]: {
		baseSkill: "Iron Maiden",
		connections: [ "Enhanced Iron Maiden" ],
		description: `When at least {c_number}{SF_8}{/c} enemies are afflicted by Iron Maiden, its damage is increased by {c_number}x[{SF_9}*100|%|]{/c}.`,
		id: 57,
		maxPoints: 1,
		x: -941.446,
		y: 368.383,
	},
	["Abhorrent Iron Maiden"]: {
		baseSkill: "Iron Maiden",
		connections: [ "Enhanced Iron Maiden" ],
		description: `Heal for {c_number}[{SF_7}*100|%|]{/c} of your maximum Life when an enemy dies while afflicted with Iron Maiden.`,
		id: 58,
		maxPoints: 1,
		x: -686.755,
		y: 495.878,
	},
	["Skeletal Mage Mastery"]: {
		connections: [ "Corruption" ],
		description: `Increase the damage and Life of your Skeletal Mages by {c_number}[{SF_0} * 100|%|]{/c} .`,
		id: 59,
		maxPoints: 3,
		x: 810.22,
		y: 0.575,
	},
	["Amplify Damage"]: {
		connections: [ "Corruption" ],
		description: `You deal {c_number}x[{SF_0} * 100|%|]{/c} increased damage to Cursed enemies.`,
		id: 60,
		maxPoints: 3,
		x: 3.12,
		y: 431.694,
	},
	["Decrepify"]: {
		connections: [ "Enhanced Decrepify", "Corruption" ],
		description: `{c_label}Essence Cost: {/c}{c_resource}{Resource Cost}{/c}
Curse the target area. Enemies afflicted by Decrepify are Slowed by {c_number}[{SF_3}*100|%|]{/c} and deal {c_number}[{SF_4}*100|%|]{/c} less damage for {c_number}{buffduration:DECREPIFY_CURSE}{/c} seconds.`,
		id: 61,
		maxPoints: 5,
		x: 313.525,
		y: 166.38,
	},
	["Enhanced Decrepify"]: {
		baseSkill: "Decrepify",
		connections: [ "Decrepify", "Abhorrent Decrepify", "Horrid Decrepify" ],
		description: `{c_label}Lucky Hit:{/c} Enemies hit while afflicted with Decrepify have up to a {c_number}[{SF_5}*100|%|]{/c} chance to be Stunned for {c_number}{buffduration:MOD_STUN}{/c} seconds.`,
		id: 62,
		maxPoints: 1,
		x: 558.24,
		y: 299.96,
	},
	["Abhorrent Decrepify"]: {
		baseSkill: "Decrepify",
		connections: [ "Enhanced Decrepify" ],
		description: `{c_label}Lucky Hit:{/c} Enemies hit while afflicted with Decrepify have up to a {c_number}[{SF_7}*100|%|]{/c} chance to reduce your active cooldowns by {c_number}[{SF_8}|1|]{/c} seconds.`,
		id: 63,
		maxPoints: 1,
		x: 687.2,
		y: 499.062,
	},
	["Horrid Decrepify"]: {
		baseSkill: "Decrepify",
		connections: [ "Enhanced Decrepify" ],
		description: `When you or your Minions hit an enemy afflicted with Decrepify below {c_number}[{SF_9}*100|%|]{/c} Life, they are instantly killed. Does not work on Bosses.`,
		id: 64,
		maxPoints: 1,
		x: 935.27,
		y: 363.898,
	},
	["Death's Embrace"]: {
		connections: [ "Corruption" ],
		description: `Close enemies take {c_number}x[{SF_0} * 100|%|]{/c} more damage from you and deal {c_number}[{SF_1} * 100|%|]{/c} less damage to you.`,
		id: 65,
		maxPoints: 3,
		x: -434.44,
		y: -269.59,
	},
	["Death's Reach"]: {
		connections: [ "Corruption" ],
		description: `You deal {c_number}x[{SF_0} * 100|%|]{/c} increased damage to Distant enemies.`,
		id: 66,
		maxPoints: 3,
		x: 443.845,
		y: -270.025,
	},
};

necromancer["Summoning"] = {
	["Corpse Tendrils"]: {
		connections: [ "Enhanced Corpse Tendrils", "Summoning" ],
		description: `{c_label}Cooldown:{/c} {c_resource}[{Cooldown Time}|1|]{/c}
{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat Effect Chance}%{/c}
{/if}Veins burst out of a Corpse, pulling in enemies, Stunning them for {c_number}{buffduration:STUN}{/c} seconds, and dealing {c_number}{payload:DAMAGE}{/c} damage to them. Does not consume the Corpse.`,
		id: 67,
		maxPoints: 5,
		x: 303.62,
		y: -136.85,
	},
	["Enhanced Corpse Tendrils"]: {
		baseSkill: "Corpse Tendrils",
		connections: [ "Corpse Tendrils", "Horrid Corpse Tendrils", "Abhorrent Corpse Tendrils" ],
		description: `Enemies who are in range of Corpse Tendrils are Slowed by {c_number}[{SF_10}*100|%|]{/c} before being pulled.`,
		id: 68,
		maxPoints: 1,
		x: 561.44,
		y: -250.575,
	},
	["Horrid Corpse Tendrils"]: {
		baseSkill: "Corpse Tendrils",
		connections: [ "Enhanced Corpse Tendrils" ],
		description: `Enemies Stunned by Corpse Tendrils take {c_number}x[{SF_11} * 100|%|]{/c} more damage from {c_important}Corpse Explosion{/c}.`,
		id: 69,
		maxPoints: 1,
		x: 872.848,
		y: -267.56,
	},
	["Abhorrent Corpse Tendrils"]: {
		baseSkill: "Corpse Tendrils",
		connections: [ "Enhanced Corpse Tendrils" ],
		description: `Enemies slain while Stunned by Corpse Tendrils have a {c_number}[{SF_9} * 100|%|]{/c} chance to drop a {c_important}Blood Orb{/c}.`,
		id: 70,
		maxPoints: 1,
		x: 649.155,
		y: -412.305,
	},
	["Reaper's Pursuit"]: {
		connections: [ "Gloom", "Crippling Darkness", "Summoning" ],
		description: `Damaging enemies with {c_important}Darkness{/c} Skills increases your Movement Speed by {c_number}{SF_1}%{/c} for {c_number}{buffduration:MOVEMENT_INCREASE}{/c} seconds.`,
		id: 71,
		maxPoints: 3,
		x: -547.81,
		y: -169.615,
	},
	["Gloom"]: {
		connections: [ "Reaper's Pursuit", "Terror" ],
		description: `When you damage enemies with {c_important}Darkness{/c} Skills, they take {c_number}x[{SF_0} * 100|%|]{/c} increased Shadow Damage for {c_number}{buffduration:INCOMING_SHADOW_DAMAGE_INCREASE}{/c} seconds, stacking up to {c_number}{SF_1}{/c} times.`,
		id: 72,
		maxPoints: 3,
		x: -721.67,
		y: -369.505,
	},
	["Terror"]: {
		connections: [ "Gloom", "Crippling Darkness" ],
		description: `{c_important}Darkness{/c} Skills deal {c_number}x[{SF_0} * 100|%|]{/c} increased damage against Immobilized, Slowed, or Stunned enemies. This also applies to Shadow Damage dealt by your Minions.`,
		id: 73,
		maxPoints: 3,
		x: -1150.985,
		y: -388.355,
	},
	["Crippling Darkness"]: {
		connections: [ "Reaper's Pursuit", "Terror" ],
		description: `{c_label}Lucky Hit:{/c} {c_important}Darkness{/c} Skills have up to a {c_number}{SF_1}%{/c} chance to Stun for {c_number}{buffduration:STUN}{/c} seconds.`,
		id: 74,
		maxPoints: 3,
		x: -1003.06,
		y: -181.13,
	},
	["Blood Begets Blood"]: {
		connections: [ "Coalesced Blood", "Tides of Blood", "Summoning" ],
		description: `While below {c_number}50%{/c} Life, you receive {c_number}[{SF_0} * 100|%|]{/c} more healing from all sources.`,
		id: 75,
		maxPoints: 3,
		x: 5.82,
		y: -372.435,
	},
	["Coalesced Blood"]: {
		connections: [ "Transfusion", "Blood Begets Blood" ],
		description: `After being Healthy for {c_number}{SF_0}{/c} seconds, your next {c_important}Blood{/c} skill {c_important}Overpowers{/c}.`,
		id: 76,
		maxPoints: 3,
		x: 188.085,
		y: -545.375,
	},
	["Transfusion"]: {
		connections: [ "Coalesced Blood", "Tides of Blood" ],
		description: `{c_important}Blood Orbs{/c} also heal your Minions for {c_number}[{SF_0} * 100|%|]{/c} of the amount.`,
		id: 77,
		maxPoints: 3,
		x: 188.105,
		y: -740.47,
	},
	["Tides of Blood"]: {
		connections: [ "Drain Vitality", "Transfusion", "Blood Begets Blood" ],
		description: `Your {c_important}Blood{/c} Skills deal {c_number}x[{SF_0}*100|%|]{/c} increased {c_important}Overpower{/c} damage. This bonus is doubled while you are {c_important}Healthy{/c}.`,
		id: 78,
		maxPoints: 3,
		x: -186.055,
		y: -545.11,
	},
	["Drain Vitality"]: {
		connections: [ "Tides of Blood" ],
		description: `{c_label}Lucky Hit:{/c} Hitting enemies with {c_important}Blood{/c} Skills has up to a {c_number}{SF_1}%{/c} chance to {c_important}Fortify{/c} you for {c_number}[{SF_0}*100|%|]{/c} Base Life {c_number}({Fortified:FORTIFY_CASTER}){/c}.`,
		id: 79,
		maxPoints: 3,
		x: -187.67,
		y: -741.395,
	},
	["Bone Spirit"]: {
		connections: [ "Enhanced Bone Spirit", "Summoning" ],
		description: `{c_label}Cooldown:{/c_label} {c_resource}[{Cooldown Time}|1|]{/c_resource} seconds
{c_label}Essence Cost:{/c} {c_resource}All Remaining Essence{/c}
{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat Effect Chance}%{/c}
{/if}Consume all of your Essence to conjure a spirit of bone that seeks enemies. Upon reaching an enemy, the spirit explodes, dealing {c_number}{Payload:DAMAGE}{/c} damage to the target and all surrounding enemies. Damage is increased by {c_number}[{SF_13} * 100|%|]{/c} for each point of Essence spent casting Bone Spirit.`,
		id: 80,
		maxPoints: 5,
		x: -81.99,
		y: 195.105,
	},
	["Enhanced Bone Spirit"]: {
		baseSkill: "Bone Spirit",
		connections: [ "Bone Spirit", "Ghastly Bone Spirit", "Dreadful Bone Spirit" ],
		description: `If Bone Spirit Critically Strikes, its cooldown is reduced by {c_number}{SF_15}{/c} seconds.  This effect can only happen once per cast.`,
		id: 81,
		maxPoints: 1,
		x: -165.82,
		y: 378.073,
	},
	["Ghastly Bone Spirit"]: {
		baseSkill: "Bone Spirit",
		connections: [ "Enhanced Bone Spirit" ],
		description: `Bone Spirit has an additional {c_number}[{SF_16} * 100|%|]{/c} Critical Strike Chance.`,
		id: 82,
		maxPoints: 1,
		x: -109.19,
		y: 542.62,
	},
	["Dreadful Bone Spirit"]: {
		baseSkill: "Bone Spirit",
		connections: [ "Enhanced Bone Spirit" ],
		description: `After Bone Spirit hits an enemy, you generate {c_number}{SF_17}{/c} Essence over the next {c_number}{buffduration:MANA_REGEN}{/c} seconds.`,
		id: 83,
		maxPoints: 1,
		x: -417.01,
		y: 502.139,
	},
	["Serration"]: {
		connections: [ "Rapid Ossification", "Compound Fracture", "Summoning" ],
		description: `Your {c_important}Bone{/c} Skills have a {c_number}[{SF_0} *100 |1%|]{/c} increased Critical Strike Chance for each {c_number}10{/c} Essence you have upon cast.`,
		id: 84,
		maxPoints: 3,
		x: -557.22,
		y: 93.025,
	},
	["Rapid Ossification"]: {
		connections: [ "Serration", "Evulsion" ],
		description: `Every {c_number}{SF_1}{/c} Essence you spend reduces the cooldowns of your {c_important}Bone{/c} Skills by {c_number}[{SF_0}|1|]{/c} seconds.`,
		id: 85,
		maxPoints: 3,
		x: -958.755,
		y: 74.64,
	},
	["Evulsion"]: {
		connections: [ "Compound Fracture", "Rapid Ossification" ],
		description: `Your {c_important}Bone{/c} Skills deal {c_number}x[{SF_0} * 100|%|]{/c} increased Critical Strike Damage to {c_important}Vulnerable{/c} enemies.`,
		id: 86,
		maxPoints: 3,
		x: -1226.03,
		y: 232.795,
	},
	["Compound Fracture"]: {
		connections: [ "Serration", "Evulsion" ],
		description: `After Critically Striking {c_number}{SF_1}{/c} times with {c_important}Bone{/c} Skills, your {c_important}Bone{/c} Skills deal {c_number}x[{SF_0} * 100|%|]{/c} increased damage for {c_number}{buffduration:BUFF_BONUS_DAMAGE}{/c} seconds.`,
		id: 87,
		maxPoints: 3,
		x: -809.63,
		y: 254.365,
	},
	["Spiked Armor"]: {
		connections: [ "Summoning" ],
		description: `Gain {c_number}{SF_1}{/c} Thorns.`,
		id: 109,
		maxPoints: 3,
		x: 492.57,
		y: 143.2,
	},
};

necromancer["Ultimate"] = {
	["Bonded in Essence"]: {
		connections: [ "Death's Defense", "Ultimate" ],
		description: `Your Minions gain {c_number}[{SF_0} * 100|%|]{/c} of your Resistances.`,
		id: 89,
		maxPoints: 3,
		x: -244.033,
		y: 245.369,
	},
	["Death's Defense"]: {
		connections: [ "Bonded in Essence", "Hellbent Commander" ],
		description: `Your Minions can't lose more than {c_number}[{SF_0}*100|%|]{/c} of their maximum Life from a single damage instance.`,
		id: 90,
		maxPoints: 3,
		x: -685.035,
		y: 319.583,
	},
	["Hellbent Commander"]: {
		connections: [ "Inspiring Command", "Ultimate", "Death's Defense" ],
		description: `Your Minions deal {c_number}x[{SF_0} * 100|%|]{/c} increased damage while you are Close to them.`,
		id: 91,
		maxPoints: 3,
		x: -496.655,
		y: 100.921,
	},
	["Inspiring Command"]: {
		connections: [ "Hellbent Commander" ],
		description: `After you have been {c_important}Healthy{/c} for at least {c_number}{buffduration:BUFF_HEALTHY_CHECK}{/c} seconds, you and your Minions gain {c_number}[{SF_0} * 100|%|]{/c} Attack Speed.`,
		id: 92,
		maxPoints: 3,
		x: -949.115,
		y: 125.486,
	},
	["Army of the Dead"]: {
		connections: [ "Prime Army of the Dead", "Ultimate" ],
		description: `{c_label}Cooldown:{/c_label} {c_resource}[{Cooldown Time}|1|]{/c_resource} seconds
{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat_Effect_Chance_Script_Formula_Override:22}%{/c}
{/if}Call forth the deep buried dead. Volatile undead emerge over the next {c_number}{buffduration:RAISE_ARMY}{/c} seconds that explode when around enemies, dealing {c_number}{payload:EXPLOSION_DAMAGE}{/c} damage.`,
		id: 93,
		maxPoints: 5,
		x: -412.909,
		y: -101.334,
	},
	["Prime Army of the Dead"]: {
		baseSkill: "Army of the Dead",
		connections: [ "Army of the Dead", "Supreme Army of the Dead" ],
		description: `When Army of the Dead's Skeletons explode, they have a {c_number}[SF_16*100|%|]{/c} chance to leave behind a Corpse.`,
		id: 94,
		maxPoints: 1,
		x: -761.575,
		y: -190.081,
	},
	["Supreme Army of the Dead"]: {
		baseSkill: "Army of the Dead",
		connections: [ "Prime Army of the Dead" ],
		description: `Army of the Dead also raises your Skeletal Warriors and Skeletal Mages.`,
		id: 95,
		maxPoints: 1,
		x: -1035.045,
		y: -69.654,
	},
	["Blood Wave"]: {
		connections: [ "Prime Blood Wave", "Ultimate" ],
		description: `{c_label}Cooldown:{/c_label} {c_resource}[{Cooldown Time}|1|]{/c_resource} seconds
{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat Effect Chance}%{/c}
{/if}Conjure a tidal wave of blood that deals {c_number}{payload:DAMAGE}{/c} damage and knocks enemies back.`,
		id: 96,
		maxPoints: 5,
		x: 308.891,
		y: -165.596,
	},
	["Prime Blood Wave"]: {
		baseSkill: "Blood Wave",
		connections: [ "Blood Wave", "Supreme Blood Wave" ],
		description: `Blood Wave Slows enemies by {c_number}[SF_7*100|%|]{/c} for {c_number}{buffduration:BUFF_SLOW}{/c} seconds.`,
		id: 97,
		maxPoints: 1,
		x: 464.882,
		y: -324.303,
	},
	["Supreme Blood Wave"]: {
		baseSkill: "Blood Wave",
		connections: [ "Prime Blood Wave" ],
		description: `Blood Wave leaves behind {c_number}3{/c} {c_important}Blood Orbs{/c} as it travels.`,
		id: 98,
		maxPoints: 1,
		x: 817.735,
		y: -299.367,
	},
	["Stand Alone"]: {
		connections: [ "Memento Mori", "Ultimate" ],
		description: `Increases Damage Reduction by {c_number}[{SF_0} * 100|%|]{/c}, reduced by {c_number}[{SF_1} * 100|%|]{/c} for each active Minion.`,
		id: 99,
		maxPoints: 3,
		x: 686.73,
		y: -0.375,
	},
	["Memento Mori"]: {
		connections: [ "Stand Alone" ],
		description: `Sacrificing both Skeletal Warriors and Skeletal Mages increases their Sacrifice bonuses by {c_number}[{SF_0} * 100|%|]{/c}.`,
		id: 100,
		maxPoints: 3,
		x: 1059.535,
		y: -0.955,
	},
	["Bone Storm"]: {
		connections: [ "Prime Bone Storm", "Ultimate" ],
		description: `{c_label}Cooldown:{/c} {c_resource}[{Cooldown Time}|1|]{/c}
{if:ADVANCED_TOOLTIP}{c_label}Lucky Hit Chance: {/c}{c_resource}{Combat_Effect_Chance_Script_Formula_Override:18}%{/c}
{/if}A swirling storm of bones appears around you and your Golem, dealing {c_number}{payload:TOOLTIP_DAMAGE}{/c} to surrounding enemies over {c_number}{buffduration:BONESTORM}{/c} seconds.`,
		id: 101,
		maxPoints: 5,
		x: 310.324,
		y: 168.163,
	},
	["Prime Bone Storm"]: {
		baseSkill: "Bone Storm",
		connections: [ "Bone Storm", "Supreme Bone Storm" ],
		description: `Your Damage Reduction is increased by {c_number}[{SF_13}*100|%|]{/c} while Bone Storm is active.`,
		id: 102,
		maxPoints: 1,
		x: 477.673,
		y: 330.114,
	},
	["Supreme Bone Storm"]: {
		baseSkill: "Bone Storm",
		connections: [ "Prime Bone Storm" ],
		description: `While Bone Storm is active, you consume nearby Corpses. Each Corpse consumed adds {c_number}{SF_14}{/c} seconds to Bonestorm's duration, up to {c_number}{SF_15}{/c} seconds.`,
		id: 103,
		maxPoints: 1,
		x: 815.48,
		y: 299.433,
	},
	["Golem Mastery"]: {
		connections: [ "Ultimate" ],
		description: `Increase the damage and Life of your Golem by {c_number}[{SF_0} * 100|%|]{/c} .`,
		id: 104,
		maxPoints: 3,
		x: 5.062,
		y: -324.445,
	},
};

necromancer["Capstone"] = {
	["Ossified Essence"]: {
		connections: [ "Capstone" ],
		description: `Your {c_important}Bone{/c} Skills deal {c_number}x[{SF_0} * 100|%|]{/c} increased damage for each point of Essence you have above {c_number}[SF_1]{/c} upon cast.`,
		id: 105,
		maxPoints: 1,
		x: 563.343,
		y: 304.93,
	},
	["Shadowblight"]: {
		connections: [ "Capstone" ],
		description: `Shadow Damage infects enemies with {c_important}Shadowblight{/c} for {c_number}{buffduration:DEBUFF_SHADOWBLIGHT_COUNTER}{/c} seconds.

Every {c_number}{SF_2}th{/c} time an enemy receives Shadow Damage from you or your Minions while they are affected by {c_important}Shadowblight{/c}, they take additional  {c_number}{payload:BURST_DAMAGE}{/c} Shadow Damage.`,
		id: 106,
		maxPoints: 1,
		x: -187.538,
		y: 305.485,
	},
	["Rathma's Vigor"]: {
		connections: [ "Capstone" ],
		description: `Increase your maximum Life by {c_number}[{SF_0} * 100|%|]{/c}. While {c_important}Healthy{/c}, you deal {c_number}x[{SF_1} *100|%|]{/c} increased damage.`,
		id: 107,
		maxPoints: 1,
		x: 187.548,
		y: 305.925,
	},
	["Strength in Numbers"]: {
		connections: [ "Capstone" ],
		description: `While you have at least {c_number}{SF_0}{/c} Minions, they gain {c_number}[{SF_1} * 100|%|]{/c} Attack Speed.`,
		id: 108,
		maxPoints: 1,
		x: -563.262,
		y: 305.87,
	},
};

export { necromancer };