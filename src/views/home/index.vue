<template>
  <div class="home">
    <h1>Home</h1>
    <CustomText>Naber lan</CustomText>
    <CustomText tag="p" size="xxsmall" color="a1">Burası çokomelli</CustomText>
    <CustomText tag="p" size="small" color="a4">Burası çokomelsiz</CustomText>
    <IconHome width="60" height="60" />
  </div>
</template>

<script>
import CustomText from '@/components/CustomText'
import IconHome from '../../icons/home.svg'

export default {
  name: 'Home',
  components: {
    CustomText,
    IconHome
  }
}
</script>

<style scoped></style>
