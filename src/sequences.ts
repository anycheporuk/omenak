type Sequence = {
	name?: string,
}
type Pathway = {
	sequences: Sequence[]
}
type OldOne = {
	name: string,
	class?: string,
	pathways: Pathway[]
}


export const oldOnes: OldOne[] = [
	{
		name: "Almighty God",
		class: "text-amber-500",
		pathways: [
			{
				sequences: [
					{
						name: "Bard",
					},
					{
						name: "Priest of Light",
					},
					{
						name: "Paladin of Honor",
					},
					{},
					{},
					{},
					{},
					{},
					{},
					{
						name: "Sun",
					},
				],
			},
			{
				sequences: [
					{
						name: "Warrior",
					},
					{
						name: "Fighter",
					},
					{
						name: "Master of Battle",
					},
					{},
					{},
					{},
					{},
					{},
					{},
					{
						name: "Diamond Giant",
					},
				],
			},
			{
				sequences: [
					{
						name: "Spectator",
					},
					{
						name: "Telepath",
					},
					{
						name: "Psychiatrist",
					},
					{},
					{},
					{},
					{},
					{},
					{},
					{
						name: "Visionary",
					},
				],
			},
			{
				sequences: [
					{
						name: "Reader",
					},
					{
						name: "Analyst",
					},
					{
						name: "Investigator",
					},
					{},
					{},
					{},
					{},
					{},
					{},
					{
						name: "Sage of the Ways",
					},
				],
			},
		],
	},
	{
		name: "Lord of Mystery",
		class: "text-violet-500",
		pathways: [
			{
				sequences: [
					{
						name: "Seer",
					},
					{
						name: "Clown",
					},
					{
						name: "Magician",
					},
					{
						name: "Faceless",
					},
					{},
					{},
					{},
					{},
					{},
					{
						name: "Fool",
					},
				],
			},
			{
				sequences: [
					{
						name: "Assassin",
					},
					{
						name: "Imitator",
					},
					{
						name: "Spy",
					},
					{},
					{},
					{},
					{},
					{},
					{},
					{
						name: "Mirage",
					},
				],
			},
			{
				sequences: [
					{
						name: "Marauder",
					},
					{
						name: "Swindler",
					},
					{
						name: "Cryptologist",
					},
					{},
					{},
					{},
					{},
					{},
					{},
					{
						name: "Bug",
					},
				],
			},
		],
	},
	{
		name: "Black Dragon",
		class: "text-blue-500",
		pathways: [
			{
				sequences: [
					{
						name: "Wizard",
					},
					{
						name: "Storm Mage",
					},
					{
						name: "Master of Anger",
					},
					{},
					{},
					{},
					{},
					{},
					{},
					{
						name: "Twilight Dragon",
					},
				],
			},
			{
				sequences: [
					{
						name: "Sleepless",
					},
					{
						name: "Night Singer",
					},
					{
						name: "Master of Sleep",
					},
					{},
					{},
					{},
					{},
					{},
					{},
					{
						name: "Darkness",
					},
				],
			},
			{
				sequences: [
					{
						name: "Corpse Collector",
					},
					{
						name: "Bone Priest",
					},
					{
						name: "Doomsayer",
					},
					{},
					{},
					{},
					{},
					{},
					{},
					{
						name: "Death",
					},
				],
			},
		],
	},
	{
		name: "Owner of the World",
		class: "text-teal-500",
		pathways: [
			{
				sequences: [
					{
						name: "Builder",
					},
					{
						name: "Researcher of the Deep",
					},
					{
						name: "Master Ruin",
					},
					{
						name: "Miner of Greed",
					},
					{
						name: "Permeable",
					},
					{
						name: "Black Knight",
					},
					{},
					{},
					{},
					{
						name: "Cave Emperor",
					},
				],
			},
			{
				sequences: [
					{
						name: "Sailor",
					},
					{
						name: "Water Swordsman",
					},
					{
						name: "Seafarer",
					},
					{},
					{},
					{},
					{},
					{},
					{},
					{
						name: "Tyrant",
					},
				],
			},
		],
	},
	{
		name: "Phoenix of the Elements",
		class: "text-lime-500",
		pathways: [
			{
				sequences: [
					{
						name: "Elementalist",
					},
					{
						name: "Poet",
					},
					{
						name: "Master of the Elements",
					},
					{},
					{},
					{},
					{},
					{},
					{},
					{
						name: "Disaster",
					},
				],
			},
			{
				sequences: [
					{
						name: "Shaman",
					},
					{
						name: "Potion Maker",
					},
					{
						name: "Closure Master",
					},
					{},
					{},
					{},
					{},
					{},
					{},
					{
						name: "Immortal Spirit",
					},
				],
			},
		],
	},
	{
		name: "Law",
		class: "text-orange-500",
		pathways: [
			{
				sequences: [
					{
						name: "Attendant",
					},
					{
						name: "Seeker",
					},
					{
						name: "Master of Grimoires",
					},
					{},
					{},
					{},
					{},
					{},
					{},
					{
						name: "Hermit",
					},
				],
			},
			{
				sequences: [
					{
						name: "Scientist",
					},
					{
						name: "Mechanic",
					},
					{
						name: "Inventor",
					},
					{
						name: "Artisan",
					},
					{},
					{},
					{},
					{},
					{},
					{
						name: "Tyrant",
					},
				],
			},
		],
	},
	{
		name: "Two-Faced",
		class: "text-red-500",
		pathways: [
			{
				sequences: [
					{
						name: "Hunter",
					},
					{
						name: "Provoker",
					},
					{
						name: "Pyromaniac",
					},
					{},
					{},
					{},
					{},
					{},
					{},
					{
						name: "Infinite Battle",
					},
				],
			},
			{
				sequences: [
					{
						name: "Illusionist",
					},
					{
						name: "Instigator",
					},
					{
						name: "Witch",
					},
					{},
					{},
					{},
					{},
					{},
					{},
					{
						name: "Plague",
					},
				],
			},
		],
	},
	{
		name: "Chaos Effect",
		class: "text-pink-500",
		pathways: [
			{
				sequences: [
					{
						name: "Vagabond",
					},
					{
						name: "Wanderer",
					},
					{
						name: "Lucky One",
					},
					{},
					{},
					{},
					{},
					{},
					{},
					{
						name: "Wheel of Fortune",
					},
				],
			},
		],
	},
];
