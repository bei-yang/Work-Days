<script>
export default {
  async mounted () {
    const resp = await axios.get<FeatureSelect[]>('/api/list')
    this.features = resp.data
  }
}
</script>