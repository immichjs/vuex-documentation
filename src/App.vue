<template>
  <div id="app">
    <button @click="sub">-</button>
    <span>{{ count }}</span>
    <button @click="add">+</button>

    <span>{{ name }}</span>
    <button @click="setName">Definir nome</button>


    <span>{{ automaticCounter }}</span>
    <button @click="activateAutomaticCounter">Ativar contador automático</button>

    <!-- <input type="email" :value="email" @input="updateEmail"> -->
    <input type="email.get" v-model="email">
    <span>{{ email }}</span>

    <button @click="changeColor('black')">Mudar Cor</button>
    <span>{{ color }}</span>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapGetters('automaticCounter', ['automaticCounter']),
    ...mapGetters('counter', ['count']),
    ...mapGetters('name', ['name']),
    // ...mapGetters('email', ['email']),
    ...mapGetters(['color']),

    email: {
      get () {
        return this.$store.state.email.email
      },
      set (value) {
        this.$store.commit('email/updateEmail', value)
      }
    }
  },
  methods: {
    ...mapMutations('counter', ['add', 'sub']),
    ...mapMutations('name', ['setName']),
    ...mapMutations(['changeColor']),

    ...mapActions(['activateAutomaticCounter']),

    updateEmail (e) {
      this.$store.commit('email/updateEmail', e.target.value)
    }
  },
}
</script>
