import LoginForm from './components/LoginForm.vue';
import RegisterForm from './components/RegisterForm.vue';

export const routes = [
    { path: '', component: LoginForm },
    { path: '/register', component: RegisterForm },
];