<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    {{author}}
    <div class="click" @click="showModule">点击</div>
    <x-button type="primary" @click.native="changeAuthor">changeAuthor</x-button>
  </div>
</template>

<script>
import { AlertModule, XButton } from 'vux';
import { mapState } from 'vuex';
import { SET_AUTHOR_INFO } from '../store/types';

export default {
  name: 'HelloWorld',
  components: {
    XButton
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App111'
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      console.log('beforeRouteEnter');
      vm.change();
    });
  },
  computed:{
    author() {
      console.log('computed author = ', this.$store.state);
      return this.$store.state.user.author;
    }
  },
  // computed: mapState([
  //   'author'
  // ]),
  methods:{
    change() {
      this.$store.commit(SET_AUTHOR_INFO,'DK hahha');
    },
    showModule() {
      AlertModule.show({
        title: 'VUX is Cool',
        content: 'Do you agree?',
        onShow () {
          console.log('Module: I\'m showing')
        },
        onHide () {
          console.log('Module: I\'m hiding now')
        }
      })
    },
    changeAuthor() {
      this.$store.dispatch('changeAuthor', 'spiroo');
    }
  }
}
</script>

<style lang="less" scoped>
.click {
  margin: 20px 0;
}
</style>