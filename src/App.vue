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
                <div class="invalid-feedback" v-if="!$v.email.uniqueEmail">Поле email, должно быть уникальным</div>
            </div>

            <div class="form-group">
                <label for="password">Password</label>
                <input
                        :class="{'is-invalid': $v.password.$error}"
                        @blur="$v.password.$touch()"
                        class="form-control"
                        id="password"
                        type="password"
                        v-model="password"
                >
                <div class="invalid-feedback" v-if="!$v.password.required">
                    Поле password обязательно
                </div>
                <div class="invalid-feedback" v-if="!$v.password.minLength">
                    Поле password - минимум {{$v.password.$params.minLength.min}} символов, а у вас -
                    {{password.length}}
                </div>
            </div>

            <div class="form-group">
                <label for="confirm">Confirm password</label>
                <input
                        :class="{'is-invalid': $v.confirmPassword.$error}"
                        @blur="$v.confirmPassword.$touch()"
                        class="form-control"
                        id="confirm"
                        type="password"
                        v-model="confirmPassword"
                >
                <div class="invalid-feedback" v-if="!$v.confirmPassword.sameAs">
                    Пароли не совпадают
                </div>
            </div>
            <pre>{{$v.email}}</pre>
        </form>
    </div>

</template>

<script>
    import {required, email, minLength, sameAs} from 'vuelidate/lib/validators'

    export default {
        data() {
            return {
                email: '',
                password: '',
                confirmPassword: ''
            }
        },
        validations: {
            email: {
                required: required, //Можно писать так - required
                email,
                uniqueEmail: function (newEmail) {
                    if (newEmail === '') return true
                    return new Promise((resolve, reject) => {
                        setTimeout(() => {
                            const value = newEmail !== 'timur@ukr.net'
                            resolve(value)
                        }, 3000)
                    })

                    // if (newEmail !== 'timur@ukr.net'){
                    //     return true
                    // }
                    return false
                }
            },
            password: {
                required,
                minLength: minLength(6)

            },
            // confirmPassword:{
            //     sameAs: sameAs('password')
            // }
            confirmPassword: {
                sameAs: sameAs((vue) => {
                    return vue.password
                })

            }
        }
    }
</script>

<style scoped>

</style>


