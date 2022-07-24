<template>
  <div class="container">
    <validate-form @form-submit="onFormSubmit">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">邮箱</label>
        <validate-input
          ref="inputRef"
          :rules="emailRules"
          v-model="emailVal"
          placeholder="hello world"
          class="hello"
          type="text"
        ></validate-input>
        <div class="form-text" v-if="emailRef.error">{{emailRef.message}}</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">密码</label>
        <validate-input type="password"></validate-input>
      </div>
      <template #submit>
        <span class="btn btn-danger">submit</span>
      </template>
    </validate-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import ValidateInput, { RulesProp } from '../components/ValidateInput.vue'
import ValidateForm from '../components/ValidateForm.vue'
import { useRouter } from 'vue-router'

const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

export default defineComponent({
  name: 'MyHome',
  components: {
    ValidateInput,
    ValidateForm
  },
  setup () {
    const router = useRouter()
    const emailRef = reactive({
      val: '',
      error: false,
      message: ''
    })
    const validateEmail = () => {
      if (emailRef.val.trim() === '') {
        emailRef.error = true
        emailRef.message = 'can not be empty'
      } else if (!emailReg.test(emailRef.val)) {
        emailRef.error = true
        emailRef.message = 'should be valid email'
      }
    }

    const emailRules: RulesProp = [
      { type: 'required', message: '电子邮箱地址不能为空' },
      { type: 'email', message: '请输入正确的电子邮箱格式' }
    ]

    const emailVal = ref('1012073997@qq.com')

    const inputRef = ref<any>()
    const onFormSubmit = (res: any) => {
      // console.log('inputRef.value', inputRef.value)
      // console.log('formSubmit', res)

      if (res) {
        router.push({
          name: 'column',
          params: {
            id: 1
          }
        })
      }
    }

    return {
      emailRef,
      validateEmail,

      emailRules,
      emailVal,

      onFormSubmit,
      inputRef
    }
  }
})
</script>
