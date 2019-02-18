<template>
  <div class="about">
    <h1>This is an about page</h1>
    <x-header :right-options="{ showMore: true }" @on-click-more="showMenus = true">
      with more menu
    </x-header>
    <x-button>submit</x-button>
    <x-button type="primary">primary</x-button>
    <x-button type="warn">Delete</x-button>
  </div>
</template>

<script>
import { XButton, XHeader } from 'vux';

export default {
  components: {
    XButton,
    XHeader
  }
};
</script>
