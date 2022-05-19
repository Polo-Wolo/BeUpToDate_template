<template>
  <div class="content">
    <FormKit
      type="file"
      label="Sauvegarde à charger"
      accept=".zip"
      help="Sélectionner le fichier de sauvegarde à charger."
      v-model="config_file"
    />
    <FormKit
      id="loadConfigFile"
      type="button"
      label="Ok"
      @click="loadConfigFile()"
    />

    <FormKit
      id="loadConfigFile"
      type="button"
      label="Sauvegarder"
      @click="saveConfigFile()"
    />

    <p>Fichier de configuration à charger :{{ config_file }}</p>
    <p>Configuration à sauvegarder : {{ config }}</p>
    <Collapsable>
      <template v-slot:header>
        <strong><p>Project</p></strong>
      </template>
      <FormKit
        id="addButton"
        type="button"
        label="add project"
        @click="addProject()"
      />
      <div
        class="list_project"
        v-for="(project, index) in projects"
        :key="project.id"
      >
        <div class="forItem">
          <Collapsable>
            <Project v-model="projects[index]" />
            <FormKit
              type="button"
              label="delete project"
              @click="deleteProject(index)"
            />
          </Collapsable>
        </div>
      </div>
      <h2>Modeled group values in Content</h2>
      <pre>{{ projects }}</pre>
    </Collapsable>
    <h2>Config :</h2>
    <!-- Afficher rien quand j'afficher juste config -->
    <pre>{{ config.projects }}</pre>

    <!-- <Collapsable>
      <template v-slot:header>
        <strong><p>IdentityCard</p></strong>
      </template>
      <IdentityCard />
    </Collapsable>

    <Collapsable>
      <template v-slot:header>
        <strong><p>Education</p></strong>
      </template>
      <Education />
    </Collapsable>

    <Collapsable>
      <template v-slot:header>
        <strong><p>WorkExperience</p></strong>
      </template>
      <WorkExperience />
    </Collapsable>

    <Collapsable>
      <template v-slot:header>
        <strong><p>CV</p></strong>
      </template>
      <CV />
    </Collapsable> -->
  </div>
</template>

<script>
import { defineComponent } from "vue";

import { FormKitSchema } from "@formkit/vue";

import Collapsable from "./Collapsable.vue";
import Project from "../Form/Project.vue";
// import Education from "../Education.vue";
// import IdentityCard from "../personnal_info/IdentityCard.vue";
// import WorkExperience from "../WorkExperience.vue";
// import CV from "../CV.vue";

import FileSaver from "file-saver";

import JSZip from "jszip";

export default {
  name: "Content",
  components: {
    Collapsable,
    Project,
    // Education,
    // IdentityCard,
    // WorkExperience,
    // CV,
  },
  emits: ['send_event'],
  data() {
    return {
      project_max_id: 0,
      projects: Array(),
      // educations: Array(),
      // work_experiences: Array(),
      // identity: { adress: {} },
      // CV: {},
      config: Array(),
      config_file: {},
    };
  },
  watch: {
    projects: {
      handler(new_value, old_value) {
        this.projects = new_value;
        //this.config.projects = this.projects;
        this.sendProject();
      },
      deep: true,
    },
  },
  methods: {
    addProject() {
      console.log("addProject");
      this.project_max_id++;
      this.projects.push({ id: this.project_max_id });
    },
    deleteProject(index) {
      console.log("deleteProject");
      console.log(this.projects.length);
      this.projects.splice(index, 1);
      if (this.projects.length == 0) {
        this.project_max_id = 0;
      }
    },
    //Remplacé par les watchers
    async loadConfigFile() {
      console.log("loadConfigFile");
      //console.log(this.config_file);
      var blob = new Blob([this.config_file[0].file], {
        type: "application/octet-binary",
      });
      console.log(blob);
      var zip = new JSZip();
      var zip_content = zip.loadAsync(blob /* = file blob */).then(
        async function (zip) {
          // console.log("zip");
          // console.log(zip);
          var config_json = await zip.file("config.json").async("text");
          // console.log("config_json");
          // console.log(config_json);
          //var config_json = zip.files["config.json"];
          //const text = await config_json.text();
          //console.log("text");
          //console.log(text);
          //console.log("text");
          //console.log(text);
          const data_config = await JSON.parse(config_json);
          // console.log("data_config");
          // console.log(data_config);
          // console.log("data_config[0].projects");
          // console.log(data_config[0].projects);
          // console.log("this.projects");
          // console.log(this.projects);
          //this.projects = data_config[0].projects;
          zip.folder("images").forEach(
            async function (relativePath, file) {
              //var projects_data=this.projects;
              for (var i of data_config[0].projects) {
                 console.log("i");
                 console.log(i);
                for (var ii of i.pictures) {
                   console.log("ii");
                   console.log(ii);
                  // console.log("file.name");
                  // console.log(file.name);
                  // console.log("ii.name");
                  // console.log(ii.name);
                  if (file.name == "images/" + ii.name) {
                    console.log("Match");
                    ii.file = new File(
                      [await zip.file(file.name).async("blob")],
                      file.name
                    );
                    console.log("ii.file");
                    console.log(ii.file);
                  }
                }
              }
              this.projects=data_config[0].projects;
            }.bind(this)
          );
          //var images = zip[""];
          // process ZIP file content here
          alert("OK");
        }.bind(this),
        function () {
          alert("Not a valid zip file");
        }.bind(this)
      );
      // const text = await this.config_file[0].file.text();
      // //console.log(text);
      // const data_config = JSON.parse(text);
      // //console.log(data);
      // //console.log(data[0].projects);
      // this.projects = data_config[0].projects;
    },
    updateConfigFile() {
      this.config = Array();
      var projects_config=this.projects;
      for(var project of projects_config){
        delete project.pictures_url;
      }
      this.config.push({ projects: projects_config });
    },
    sendProject() {
      //this.updateConfigFile();
      this.eventBus.emit('send_data', this.projects)
    },
    saveConfigFile() {
      console.log("saveConfigFile");
      var file_name = prompt("Saisissez le nom du fichier (sans l'extension");
      //Update config file :
      //To do : Ajouter les autre champs
      // this.config = Array();
      // this.config.push({ projects: this.projects });
      this.updateConfigFile();
      const zip = new JSZip();
      const data_config = JSON.stringify(this.config, null, 4);
      zip.file("config.json", data_config);
      const images = Array();
      //Récupère les images dans les diférents projets
      for (var i of this.projects) {
        if (i.pictures) {
          for (var ii of i.pictures) {
            images.push(ii);
          }
        }
      }
      //console.log(images);
      const img = zip.folder("images");
      for (const image of images) {
        img.file(image.name, image.file);
      }
      zip.generateAsync({ type: "blob" }).then(function (content) {
        console.log("after zip generate");
        saveAs(content, file_name + ".zip");
      });
    },
  },
};
</script>
<style src="./style.css"/>
