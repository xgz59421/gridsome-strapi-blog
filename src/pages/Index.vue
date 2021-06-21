<template>
  <Layout>
    <div style="min-height: 600px" >
      <div></div>
      <el-card shadow="never" style="min-height: 400px" v-if="blog.id">
        <div slot="header">
          <span>{{blog.title}}</span>
        </div>
        <div style="font-size: 0.9rem;line-height: 1.5;color: #606c71;">
          发布 {{$util.utcToLocal(blog.created_at)}}
          <br> 更新 {{blog.updateTime}}
        </div>
        <div
          style="font-size: 1.1rem;line-height: 1.5;color: #303133;border-bottom: 1px solid #E4E7ED;padding: 5px 0px 5px 0px">
          <pre style="font-family: '微软雅黑'">{{blog.description}}</pre>
        </div>
        <div class="markdown-body" style="padding-top: 20px">
          <img :src="GRIDSOME_API_URL + blog.cover.url" alt="">
        </div>
      </el-card>
      <el-card shadow="never" 
        style="margin-bottom: 20px;padding: 20px 0px 20px 0px;text-align: center" 
        v-if="!blog.id">
        <font style="font-size: 30px;color:#dddddd ">
          <b>没有更新 ╮(๑•́ ₃•̀๑)╭</b>
        </font>
      </el-card>
    </div>
  </Layout>
</template>

<page-query>
query ($page: Int) {
  gists: allStrapiGist (perPage: 1, page: $page) @paginate{
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        updateTime
        created_at
        description
        content
        cover {
          url
        }
      }
    }
  }
}
</page-query>

<script>
  // import GistApi from '@/api/gist'
  export default {
    data() {
      return {
        blog: {
          id: "",
          title: "",
          content: "",
          description: "",
          created_at: "",
          updateTime: "",
          cover:""
        }
      }
    },
    metaInfo: {
      titleTemplate: '最新动态'
    },
    mounted() {
      if (this.$page.gists.edges) {
        this.blog = this.$page.gists.edges[0].node
      }
    },
  }

</script>
