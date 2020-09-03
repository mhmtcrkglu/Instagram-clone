<template>
  <component :is="tag" :class="[color, size]">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'CustomText',
  props: {
    tag: {
      type: String,
      default: 'span'
    },
    size: {
      type: String,
      default: 'normal', // normal:14, small:12, xsmall:11, xxsmal:10
      validator: function (value) {
        return ['normal', 'small', 'xsmall', 'xxsmall'].indexOf(value) !== -1
      }
    },
    color: {
      type: String,
      default: 'a1',
      validator: function (value) {
        return ['a1', 'a2', 'a3', 'a4'].indexOf(value) !== -1
      }
    }
  }
}
</script>

<style scoped>
.small {
  font-size: 12px;
}

.xsmall {
  font-size: 11px;
}

.xxsmall {
  font-size: 10px;
}

.a1 {
  color: rgb(var(--i1d));
}

.a2 {
  color: rgb(var(--edc));
}

.a3 {
  color: rgb(var(--f75));
}

.a4 {
  color: rgb(var(--fe0));
}
</style>
