<template>
  <div class="home">
    {{$store.state.auth}}
    <LoginPage />
  </div>
</template>

<script>
// @ is an alias to /src
import LoginPage from '../components/LoginPage';
export default {
  name: 'Home',
  components: {
    LoginPage,
  }
}
</script>
