
<template>
  <div>
    <code-diff
      :old-string="oldStr"
      :new-string="newStr"
      :context="context"
      :output-format="outputFormat"
    />

    <div v-html="html"></div>
  </div>
</template>

<script>
  import codeDiff from 'vue-code-diff'
  export default {
    name: "vueCodeDiff",
    components: {
      codeDiff
    },
    data () {
      return {
        oldStr: "{ddd:{dddd:{ddd:{ddd:dd}}",
        newStr: "dddd",
        fotMat: false,
        context: 10
      }
    },
    computed: {
      outputFormat () {
        return this.fotMat ? 'line-by-line' : 'side-by-side'
      },
      html(){
        let elementS='<span>max-file-size:10MB</span>';
        return elementS
      }
    },
    watch: {
      oldStr (v) {
        localStorage.setItem('oldStr', v)
      },
      newStr (v) {
        localStorage.setItem('newStr', v)
      }
    },
    created () {
      // this.oldStr =  JSON.parse(this.oldStr)
      // this.newStr =  JSON.parse(this.newStr)
    },
    methods: {
    }
  }
</script>
