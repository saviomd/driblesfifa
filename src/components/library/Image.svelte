<script lang="ts">
  export let alt: string;
  export let height: number;
  export let src: string;
  export let width: number;
</script>

<img {alt} {height} loading="lazy" {src} {width} />
