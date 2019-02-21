<template>
    <div class="container">
        <form class="pt-3">
            <div class="form-group">
                <label for="email">Email</label>
                <input
                        :class="{'is-invalid': $v.email.$error}"
                        @blur="$v.email.$touch()"
                        class="form-control"
                        id="email"
                        type="email"
                        v-model="email"
                >
                <div class="invalid-feedback" v-if="!$v.email.required">Поле email обязательно</div>
                <div class="invalid-feedback" v-if="!$v.email.email">Поле email, должно содержать email</div>
            </div>
            <pre>{{$v.email}}</pre>
        </form>
    </div>

</template>

<script>
    import {required, email} from 'vuelidate/lib/validators'
    export default {
        data() {
            return {
                email: ''
            }
        },
        validations: {
            email: {
                required: required, //Можно писать так - required
                email
            }
        }
    }
</script>

<style scoped>

</style>


