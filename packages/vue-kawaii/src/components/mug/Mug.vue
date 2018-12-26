<script>
import paths from './paths.js'
import getUniqueId from '../../utils/getUniqueId.js'
import Face from '../common/face/Face.vue'
import Wrapper from '../common/wrapper/Wrapper.js'

export default {
  name: 'Mug',
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
      default: 170,
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
      default: '#A6E191',
    },
  },
  render() {
    const { size, color, mood } = this
    return (
      <Wrapper>
        <svg
          width={size * 1.5}
          height={size}
          viewBox="0 0 172 115"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g id="kawaii-mug">
            <g id="kawaii-mug__body" fillRule="nonzero">
              <path d={paths.shape} id="kawaii-mug__shape" fill={color} />
              <path
                d={paths.shadow}
                id="kawaii-mug__shadow"
                fill="#000"
                opacity=".1"
              />
            </g>
            <Face
              mood={mood}
              transform="translate(71 42)"
              uniqueId={getUniqueId()}
            />
          </g>
        </svg>
      </Wrapper>
    )
  },
}
</script>
