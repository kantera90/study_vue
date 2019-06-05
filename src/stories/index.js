import { storiesOf } from '@storybook/vue'
import Page120 from '../components/index120.vue'
import Page121 from '../components/index121.vue'
import Page122 from '../components/index122.vue'
import Page123 from '../components/index123.vue'
import Page124 from '../components/index124.vue'
import Page126 from '../components/index126.vue'
import Page128 from '../components/index128.vue'

storiesOf('page', module)
.add('120', () => ({
    components: { Page120 },
    template: `<Page120 />`
  })
)
.add('121', () => ({
    components: { Page121 },
    template: `<Page121 />`
  })
)
.add('122', () => ({
    components: { Page122 },
    template: `<Page122 />`
  })
)
.add('123', () => ({
    components: { Page123 },
    template: `<Page123 />`
  })
)
.add('124', () => ({
    components: { Page124 },
    template: `<Page124 />`
  })
)
.add('126', () => ({
    components: { Page126 },
    template: `<Page126 />`
  })
)
.add('128', () => ({
    components: { Page128 },
    template: `<Page128 />`
  })
)
