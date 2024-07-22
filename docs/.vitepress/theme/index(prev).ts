// https://vitepress.dev/guide/custom-theme
import DefaultTheme from 'vitepress/theme'
import { h, onMounted, nextTick, watch } from 'vue'
import { useRoute} from 'vitepress'
import mediumZoom from 'medium-zoom'
import Tooltip from './components/Tooltip.vue'
import './style.css'
import DocImg from './components/DocImg.vue'

export default {
  extends: DefaultTheme,

  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },

  setup() {
    const route = useRoute();

    let captionElement: HTMLElement | null = null;

    const initZoom = () => {
      const zoom = mediumZoom('.img-container img', { 
        background: 'var(--vp-c-bg)',
        margin: 100,
        container: '.medium-zoom-overlay'
      });
      zoom.on('opened', event => {
        const img = event.target as HTMLElement;
        const imgContainer = img ? img.closest('.img-container') : null;
        const captionSpan = imgContainer ? imgContainer.querySelector('span') : null;
        console.log(captionSpan);

        if (captionSpan) {
          const captionText = captionSpan.textContent;

          let captionElement = document.createElement('div');
          captionElement.className = 'zoom-caption';
          captionElement.innerText = captionText || '';

          const zoomImage = document.querySelector('.medium-zoom-image') as HTMLElement;
          if (zoomImage) {
            captionElement.style.width = zoomImage.offsetWidth + 'px';
            captionElement.style.position = 'absolute';

          }
          const overlay = document.querySelector('.medium-zoom-overlay');
          if (overlay) {
            overlay.appendChild(captionElement);
            console.log('appended')
          }
        }
      });
      zoom.on('closed', () => {
        if (captionElement) {
          captionElement.remove();
          captionElement = null;
          console.log("closed");
        }
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
    app.component('Tooltip', Tooltip)
    app.component('DocImg', DocImg)
  }
}
