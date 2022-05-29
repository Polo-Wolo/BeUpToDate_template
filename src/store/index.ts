import { Project, Education, WorkExperience, Infos } from '../models'
import { createStore } from 'vuex'
import data from "../assets/data.json"


export default createStore({
	state: {
		projects : data.projects,
	}, //data
	mutations: {
		SET_PROJECTS(state: any, projects: Array<Project>): void {
			//console.log("SET_PROJECTS");
			state.projects = projects;
		},
		SET_EDUCATIONS(state: any, educations: Array<Education>): void {
			state.educations = educations;
		},
		SET_WORKEXPERIENCES(state: any, workexperiences: Array<WorkExperience>): void {
			state.workexperiences = workexperiences;
		},
		SET_INFOS(state: any, infos: Infos): void {
			state.infos = infos;
		},
	},
	actions: {
		init({commit}: any) {
			commit("SET_PROJECTS", data.projects);
			commit("SET_EDUCATIONS", data.educations);
			commit("SET_WORKEXPERIENCES", data.workexperiences);
			commit("SET_INFOS", data.infos);
		},
	},
	getters: {
		projects(state: any): Array<Project> {
			return data.projects;
		},
		getProjectById(state: any): Function {
			return (id: Number)=>data.projects.find(project=>project.id == id) as Project;
		}, 
		educations(state: any): Array<Education> {
			return data.educations;
		},
		workexperiences(state: any): Array<WorkExperience> {
			return data.workexperiences;
		},
		infos(state: any): Infos {
			return data.infos;
		}
	},
	modules: {}
})
