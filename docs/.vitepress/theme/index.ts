// https://vitepress.dev/guide/custom-theme
import DefaultTheme from 'vitepress/theme'
import { h, onMounted, nextTick, watch } from 'vue'
import { useRoute} from 'vitepress'
import mediumZoom from 'medium-zoom'
import './style.css'

export default {
  extends: DefaultTheme,

  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },

  setup() {
    const route = useRoute();

    const initZoom = () => {
      mediumZoom('[data-zoomable]', { 
        background: 'var(--vp-c-bg)',
        margin: 40
      });
    };
    const updateBodyClass = () => {
      const pathSegments= route.path.split('/').filter(Boolean);
      const rootFolder = pathSegments.length > 1 ? pathSegments[1]: 'home';
      document.body.className = rootFolder;
    }
    onMounted(() => {
      initZoom();
      updateBodyClass();
    });
    watch(
      () => route.path,
      () => {
        nextTick(() => {
        initZoom()
        updateBodyClass();
        })
      }
    );
  },

  enhanceApp({ app, router, siteData }) {
  }
}
