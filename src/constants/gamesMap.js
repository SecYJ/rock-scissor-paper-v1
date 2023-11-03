import {
    clPaper as paper, 
    clScissor as scissor,
    clRock as rock,
    clLizard as lizard,
    clSpock as spock
} from "../../assets";

export const GAMES_MAP = {
	rock: {
		name: "rock",
		icon: rock,
	},
	scissor: {
		name: "scissor",
		icon: scissor,
	},
	paper: {
		name: "paper",
		icon: paper,
	},
    lizard: {
        name: "lizard",
        icon: lizard
    },
    spock: {
        name: "spock",
        icon: spock
    }
};