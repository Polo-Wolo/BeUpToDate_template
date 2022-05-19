<template>
  <div class="container">
    <div class="sample-input">
      <h1>
        <strong> My Project </strong>
        <!-- <FormKit type="button" label="Validate" /> -->
      </h1>
      <br />
      <FormKit type="group" v-model="modelValue" :delay="1000" @input="updateValue">
        <!-- Nom Projet -->
        <FormKit
          name="title"
          label="Nom du projet"
          placeholder="Entrer le nom du projet"
          validation="required"
          validation-behavior="live"
          :delay="1000"
        />
        <!--Durré du projet pas représenté pareil dans le diagramme de classe.-->
        <!--Start Project-->
        <FormKit
          name="type"
          label="Type de projet"
          placeholder="Entrer le type de projet"
          validation="required"
          validation-behavior="live"
          :delay="1000"
        />
        <!--Start Project-->
        <FormKit
          type="date"
          name="date"
          value="2011-01-01"
          label="Début de votre projet"
          help="Entrer la date de début de votre projet"
          validation="required|before:2010-01-01"
          validation-visibility="live"
          :delay="1000"
        />
        <!-- End Project-->
        <FormKit
          type="date"
          name="end_date"
          value="2011-01-01"
          label="Fin  de votre projet"
          help="Entrer la date de fin de votre projet"
          validation="required|before:2010-01-01"
          validation-visibility="live"
          :delay="1000"
        />
        <!-- time-->
        <FormKit
          type="text"
          name="time"
          value=""
          label="Durré du projet"
          help="Saisissez la durée du projet."
          validation="required"
          validation-visibility="live"
          :delay="1000"
        />
        <!-- Content -->
        <FormKit
          type="textarea"
          name="content"
          label="Décriver votre projet"
          rows="10"
          placeholder="Présentez votre projet en détails."
          :delay="1000"
        />

        <!--Photo du projet (à voir si on fait avec direct import photo ou url?-->
        <FormKit
          type="file"
          name="pictures"
          label="Photo du projet"
          accept=".pdf,.jpg,.png,.psd,.jpeg,.jfif"
          help="Sélectionner une photo de votre projet"
          multiple
          :delay="1000"
        />
        <FormKit
          name="tags"
          label="Tags"
          placeholder=""
          validation="required"
          validation-behavior="live"
          :delay="1000"
        />
      </FormKit>

      <!-- <FormKit
        id="loadConfigFile"
        type="button"
        label="Update image"
        @click="updateImageURLList()"
      /> -->

      <h2>Modeled group values</h2>
      <pre class="form-data">{{ modelValue }}</pre>
      <p>Images :</p>
      <div v-if="modelValue.pictures">
        <div v-for="image in modelValue.pictures" :key="image">
          <img :src="get_URL(image)" />
        </div>
      </div>
    </div>
  </div>
  <br />
</template>

<script>
import { defineComponent } from "vue";

export default {
  name: "Project",
  components: {},
  props: {
    modelValue: {},
  },
  // watch: {
  //   modelValue: {
  //     handler(new_value, old_value) {
  //       console.log("Watcher modelValue");
  //       this.modelValue = new_value;
  //       updateValue();
  //     },
  //     deep: true,
  //   },
  // },
  data() {
    return { /*pictures_url: Array()*/ };
  },
  mounted (){
    this.updateValue();
  },
  methods: {
    ImageURLList(pictures) {
      var pictures_url;
      console.log("updateImageURLList");
      pictures_url = Array();
      for (var i of pictures) {
        //console.log(i.file);
        var img_URL = URL.createObjectURL(i.file);
        //console.log(img_URL);
        pictures_url.push(img_URL);        
      }
      return pictures_url;
    },
    updateValue(event) {
      console.log("updateValue");
      // this.modelValue.time=this.modelValue.start_date-this.modelValue.end_date;
      // console.log("typeof(start_date)");
      // console.log(typeof(start_date));
      // console.log(this.modelValue.time);
      //console.log("typeof(this.pictures)")
      //console.log("this.pictures")
      console.log(this.modelValue.pictures.length >0)
      if (this.modelValue.pictures){
        this.modelValue.pictures_url=this.ImageURLList(this.modelValue.pictures);
      }
      else
      {
        this.modelValue.pictures_url=[];
      }
      this.$emit("update:modelValue", this.modelValue);
    },
    get_URL(image){
      console.log("image")
      console.log(image)
      return "";//URL.createObjectURL(image.file);
    }
  },
};
</script>

<style src="./style.css"/>