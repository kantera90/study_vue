import { storiesOf } from '@storybook/vue'
import Page1 from '../components/index1.vue'
import Page2 from '../components/index2.vue'
import Page3 from '../components/index3.vue'
import Page4 from '../components/index4.vue'
import Page5 from '../components/index5.vue'
import Page6 from '../components/index6.vue'

storiesOf('page', module)
.add('120', () => ({
    components: { Page1 },
    template: `<Page1 />`
  })
)
.add('121', () => ({
    components: { Page2 },
    template: `<Page2 />`
  })
)
.add('122', () => ({
    components: { Page3 },
    template: `<Page3 />`
  })
)
.add('123', () => ({
    components: { Page4 },
    template: `<Page4 />`
  })
)
.add('124', () => ({
    components: { Page5 },
    template: `<Page5 />`
  })
)
.add('126', () => ({
    components: { Page6 },
    template: `<Page6 />`
  })
)
