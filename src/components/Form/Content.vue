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

    <!-- <p>Fichier de configuration à charger :{{ config_file }}</p>
    <p>Configuration à sauvegarder : {{ config }}</p> -->
    <Collapsable>
      <template v-slot:header>
        <strong><p>Project</p></strong>
      </template>
      <FormKit
        id="addButton"
        type="button"
        label="Ajouter un projet."
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
              label="Supprimer le projet."
              @click="deleteProject(index)"
            />
          </Collapsable>
        </div>
      </div>
      <!-- <h2>Modeled group values in Content</h2>
      <pre>{{ projects }}</pre> -->
    </Collapsable>
    <!-- <h2>Config :</h2> -->
    <!-- Afficher rien quand j'afficher juste config -->
    <!-- <pre>{{ config.projects }}</pre> -->

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

import store from "../../store";

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
        store.commit("SET_PROJECTS", this.projects);
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
    async loadConfigFile() {
      console.log("loadConfigFile");
      var blob = new Blob([this.config_file[0].file], {
        type: "application/octet-binary",
      });
      console.log(blob);
      var zip = new JSZip();
      var zip_content = zip.loadAsync(blob /* = file blob */).then(
        async function (zip) {
          //Chargement du fichier .json
          var config_json = await zip.file("config.json").async("text");
          const data_config = await JSON.parse(config_json);

          //Chargement des images de l'archive et réatribution à chaques projets de ses images.
          zip.folder("images").forEach(
            async function (relativePath, file) {
              for (var i of data_config[0].projects) {
                for (var ii of i.pictures) {
                  if (file.name == "images/" + ii.name) {
                    console.log("Match");
                    ii.file = new File(
                      [await zip.file(file.name).async("blob")],
                      file.name
                    );
                  }
                }
              }
              this.projects = data_config[0].projects;
            }.bind(this)
          );
          // process ZIP file content here
          alert("Le chargement ses déroulé avec succès.");
        }.bind(this),
        function () {
          alert("Fichier zip invalide.");
        }.bind(this)
      );
    },
    updateConfigFile() {
      this.config = Array();
      var projects_config = this.projects;
      for (var project of projects_config) {
        delete project.pictures_url;
      }
      this.config.push({ projects: projects_config });
    },
    saveConfigFile() {
      console.log("saveConfigFile");
      var file_name = prompt("Saisissez le nom du fichier (sans l'extension");
      //Update config file :
      //To do : Ajouter les autre champs
      this.updateConfigFile();
      const zip = new JSZip();
      const data_config = JSON.stringify(this.config, null, 4);
      zip.file("config.json", data_config);
      const images = Array();
      //Récupère les images dans les diférents projets et les ajouter à l'archive dans le dossier image
      for (var i of this.projects) {
        if (i.pictures) {
          for (var ii of i.pictures) {
            images.push(ii);
          }
        }
      }
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
