<script>
import paths from './paths.js'
import getUniqueId from '../../utils/getUniqueId.js'
import Face from '../common/face/Face.vue'
import Wrapper from '../common/wrapper/Wrapper.js'

export default {
  name: 'Planet',
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
      default: 190,
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
      default: '#FCCB7E',
    },
  },
  render() {
    const { size, color, mood } = this
    return (
      <Wrapper>
        <svg
          width={size}
          height={size}
          version="1.1"
          viewBox="0 0 134 134"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <path d={paths.shape} id="kawaii-planet__shape--path" />
            <path d={paths.shadow} id="kawaii-planet__shadow--path" />
          </defs>
          <g id="kawaii-planet">
            <g id="kawaii-planet__body">
              <mask id="mask-2" fill="#fff">
                <use xlinkHref="#kawaii-planet__shape--path" />
              </mask>
              <use
                id="kawaii-planet__shape"
                fill={color}
                xlinkHref="#kawaii-planet__shape--path"
              />
              <mask id="mask-4" fill="#fff">
                <use xlinkHref="#kawaii-planet__shadow--path" />
              </mask>
              <use
                id="kawaii-planet__shadow"
                fill="#000000"
                opacity=".1"
                xlinkHref="#kawaii-planet__shadow--path"
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
