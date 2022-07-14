<template>
  <div class="dropdown" ref="dropdownRef">
    <a href="#" class="btn btn-outline-light my-2 dropdown-toggle" @click.prevent="toggleOpen">
      {{title}}
    </a>
    <ul class="dropdown-menu" :style="{display: 'block'}" v-if="isOpen">
      <!-- <li class="dropdown-item">
        <a href="#">新建文章</a>
      </li>
      <li class="dropdown-item">
        <a href="#">编辑资料</a>
      </li> -->
      <slot></slot>
    </ul>
  </div>
</template>

<script lang="ts">
// import { defineComponent, onMounted, onUnmounted, ref } from 'vue'
import { defineComponent, ref, watch } from 'vue'
import useClickOutside from '../hooks/useClickOutside'
export default defineComponent({
  name: 'DropDown',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup () {
    const dropdownRef = ref<null | HTMLElement>(null)
    const isOpen = ref(false)
    const toggleOpen = () => {
      isOpen.value = !isOpen.value
    }
    // const handler = (e: MouseEvent) => {
    //   if (dropdownRef.value) {
    //     console.log(dropdownRef.value)
    //     const isDropdownContent = dropdownRef.value.contains(e.target as HTMLElement)
    //     if (!isDropdownContent && isOpen.value) {
    //       isOpen.value = false
    //     }
    //   }
    // }
    // onMounted(() => {
    //   document.addEventListener('click', handler)
    // })
    // onUnmounted(() => {
    //   document.removeEventListener('click', handler)
    // })
    // hooks 写法
    const isClickOutside = useClickOutside(dropdownRef)
    watch(isClickOutside, () => {
      if (isClickOutside.value && isOpen.value) {
        isOpen.value = false
      }
    })
    return {
      dropdownRef,
      isOpen,
      toggleOpen
    }
  }
})
</script>
