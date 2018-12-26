<script>
import paths from './paths.js'
import getUniqueId from '../../utils/getUniqueId.js'
import Face from '../common/face/Face.vue'
import Wrapper from '../common/wrapper/Wrapper.js'

export default {
  name: 'IceCream',
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
      default: 300,
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
      default: '#FDA7DC',
    },
  },
  render() {
    const { size, color, mood } = this
    return (
      <Wrapper>
        <svg
          width={size * 0.5}
          height={size}
          viewBox="0 0 110 220"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g id="kawaii-iceCream">
            <g fillRule="nonzero">
              <path
                d={paths.stick}
                id="kawaii-iceCream__stick"
                fill="#FCCB7E"
              />
              <path d={paths.shape} id="kawaii-iceCream__shape" fill={color} />
              <path
                d={paths.shadow}
                id="kawaii-iceCream__shadow"
                fill="#000000"
                opacity=".1"
              />
            </g>
            <Face
              mood={mood}
              transform="translate(22.000000, 81.000000)"
              uniqueId={getUniqueId()}
            />
          </g>
        </svg>
      </Wrapper>
    )
  },
}
</script>
