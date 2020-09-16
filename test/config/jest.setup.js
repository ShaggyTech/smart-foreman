import CompositionApi from '@vue/composition-api';
import Vue from 'vue';
import { config as VTUConfig } from '@vue/test-utils';
import Vuetify from 'vuetify';
import { rules } from '@/plugins/vee-validate';
import '@testing-library/jest-dom';

Vue.use(CompositionApi);
Vue.use(Vuetify);

rules();

// Stub Nuxt components
VTUConfig.stubs.Nuxt = true;
VTUConfig.stubs['nuxt-link'] = true;
VTUConfig.stubs['router-link'] = true;

const components = [
  /* App */
  {
    name: 'AppTitleCard',
    path: '../../components/app/TitleCard.vue',
  },
  /* Base */
  {
    name: 'BaseInputWithValidation',
    path: '../../components/base/InputWithValidation.vue',
  },
  /* Form */
  {
    name: 'FormLogin',
    path: '../../components/form/Login.vue',
  },
  {
    name: 'FormRegister',
    path: '../../components/form/Register.vue',
  },
  /* Layout */
  {
    name: 'LayoutHeader',
    path: '../../components/layout/Header.vue',
  },
  /* VinDecoder */
  {
    name: 'VinDecoderCard',
    path: '../../components/VinDecoder/Card.vue',
  },
  {
    name: 'VinDecoderHistory',
    path: '../../components/VinDecoder/History.vue',
  },
  {
    name: 'VinDecoderResults',
    path: '../../components/VinDecoder/Results.vue',
  },
];

components.forEach(({ name, path }) => {
  Vue.component(`${name}`, require(path).default);
  Vue.component(`Lazy${name}`, require(path).default);
});
