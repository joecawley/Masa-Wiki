<template id="template-zoom">
  <div class="img-container">
    <figure>
      <img class="doc-img" :src=[computedSrc] :alt=[caption]>
      <span class="img-caption">{{ caption }}</span>
    </figure>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    caption: {
      type: String,
      required: false
    }
  },
  computed: {
    computedSrc() {
      return import.meta.env.BASE_URL + this.src;
    }
  }
};
</script>

<style>
  .img-container {
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .img-caption {
    font-family: 'Roboto Slab', sans-serif;
    font-style: italic;
    color: rgb(150,150,150);
    border-top: 1px dashed var(--vp-c-gray-3);
    display: flex;
    padding: 4px;
  }

  .doc-img {
  border: 2px solid black;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 2px rgba(255,255,255, 0.2);
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 16px;
  margin-bottom: 12px;
}
</style>