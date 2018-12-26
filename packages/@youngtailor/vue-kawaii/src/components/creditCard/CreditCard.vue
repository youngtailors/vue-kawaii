<script>
import paths from './paths.js'
import getUniqueId from '../../utils/getUniqueId.js'
import Face from '../common/face/Face.vue'
import Wrapper from '../common/wrapper/Wrapper.js'

export default {
  name: 'CreditCard',
  components: {
    Face,
    Wrapper,
  },
  props: {
    size: {
      type: Number,
      default: 200,
    },
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
    color: {
      type: String,
      default: '#83D1FB',
    },
  },
  render() {
    const { size, color, mood } = this
    return (
      <Wrapper>
        <svg
          width={size * 1.38}
          height={size}
          viewBox="0 0 198 143"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g id="kawaii-creditCard">
            <g id="kawaii-creditCard__body" fillRule="nonzero">
              <path
                d={paths.shape}
                id="kawaii-creditCard__shape"
                fill={color}
              />
              <path
                d={paths.shadow}
                id="kawaii-creditCard__shadow"
                fill="#000"
                opacity=".1"
              />
              <path
                id="kawaii-creditCard__stripe"
                fill="#000"
                d="M0 17h198v27H0z"
              />
            </g>
            <Face
              mood={mood}
              transform="translate(66 73)"
              uniqueId={getUniqueId()}
            />
          </g>
        </svg>
      </Wrapper>
    )
  },
}
</script>
