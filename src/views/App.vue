<template>
  <div class="container">
    <global-header :user="userData"></global-header>
    <router-view></router-view>
    <footer class="text-center py-4 text-secondary bg-light mt-6">
      <small>
        <ul class="list-inline mb">
          <li class="list-inline-item">2022 ffhou</li>
          <li class="list-inline-item">源码</li>
          <li class="list-inline-item">文档</li>
          <li class="list-inline-item">联系</li>
          <li class="list-inline-item">更多</li>
        </ul>
      </small>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import GlobalHeader, { UserProps } from '../components/GlobalHeader.vue'

const testUserData: UserProps = {
  // name: 'ffhou',
  isLogin: false
}

export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader
  },
  setup () {
    return {
      userData: testUserData
    }
  }
})
</script>
