<template>
  <Layout>
    <div style="min-height: 600px" >
      <el-card shadow="never">
        <div class="markdown-body" 
          v-if="readme"
          v-html="readme"
          ></div>
        <div style="min-height: 400px;margin-bottom: 20px;padding: 20px 0px 20px 0px;text-align: center" v-else>
          <font style="font-size: 30px;color:#dddddd ">
            <b>◔ ‸◔？没有博客介绍</b>
          </font>
        </div>
      </el-card>
    </div>
  </Layout>
</template>

<page-query>
query {
  readme: allBlogPost {
    edges {
      node {
        title
        content
      }
    }
  }
}

</page-query>

<script>
  // import ProjectApi from '@/api/project'
  import MarkdownIt from 'markdown-it'
  const md = new MarkdownIt()
  export default {
    name: 'ReadmePage',
    metaInfo: {
      titleTemplate: 'readme'
    },
    computed: {
      readme(){
        return this.$page.readme.edges[0].node.content
      }
    },
    mounted() {
      // var html= md.render(this.$page.readme.edges[0].node.content)
      // console.log(html);
      console.log('this.readme',this.readme);
    },
    methods: {
      mdToHtml(markdown) {
        return md.render(markdown)
      }
    }

  }
</script>

<style>
</style>