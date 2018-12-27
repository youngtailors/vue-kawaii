<docs>
In this example the _Ghost_ has the mood <b>happy</b>. You can see the code and play with it. Try to change the mood to any other.

```vue
<Ghost :size="240" mood="blissful" color="#E0E4E8" />
```
<Ghost :size="240" mood="blissful" color="#E0E4E8" />
</docs>

<script>
import paths from './paths.js'
import getUniqueId from '../../utils/getUniqueId.js'
import Face from '../common/face/Face.vue'
import Wrapper from '../common/wrapper/Wrapper.js'

export default {
  name: 'Ghost',
  components: {
    Face,
    Wrapper,
  },
  props: {
    /**
     * Size of the width
     * */
    size: {
      type: Number,
      default: 240,
    },
    /**
     * One of:
     * `sad, shocked, happy, blissful, lovestruck, excited, ko`
     */
    mood: {
      validator(val) {
        return [
          'sad',
          'shocked',
          'happy',
          'blissful',
          'lovestruck',
          'excited',
          'ko',
        ].includes(val)
      },
      default: 'blissful',
    },
    /**
     * Hex color
     */
    color: {
      type: String,
      default: '#E0E4E8',
    },
  },
  render() {
    const { size, color, mood } = this
    return (
      <Wrapper>
        <svg
          width={size * 0.77}
          height={size}
          viewBox="0 0 130 168"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g id="kawaii-ghost">
            <g id="kawaii-ghost__body">
              <path d={paths.shape} id="kawaii-ghost__shape" fill={color} />
              <path
                d={paths.shadow}
                id="kawaii-ghost__shadow"
                fillOpacity=".1"
                fill="#000000"
              />
            </g>
            <Face
              mood={mood}
              transform="translate(34 57)"
              uniqueId={getUniqueId()}
            />
          </g>
        </svg>
      </Wrapper>
    )
  },
}
</script>
