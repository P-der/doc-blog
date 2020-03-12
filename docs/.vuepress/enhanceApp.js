import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import VueHighlightJS from 'vue-highlight.js';
import 'highlight.js/styles/atom-one-dark.css';
import css from 'highlight.js/lib/languages/css';
import javascript from 'highlight.js/lib/languages/javascript';
import vue from 'vue-highlight.js/lib/languages/vue';
import Vue from 'vue'
Vue.use(ViewUI)
Vue.use(VueHighlightJS, {
	languages: {
        css,
        javascript,
        vue
	}
});


