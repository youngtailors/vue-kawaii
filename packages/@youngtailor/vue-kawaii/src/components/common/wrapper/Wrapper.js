export default {
  name: 'Wrapper',
  render(h) {
    const { style } = this
    return h(
      'div',
      {
        style: { position: 'relative', ...(style || {}) },
      },
      this.$slots.default,
    )
  },
}
