<script lang="ts">
  import { Image } from "../library";
</script>

<footer class="border-secondary border-top my-5 pb-5 pt-1 small">
  {`© 2012-2017...2022-${new Date().getFullYear()} `}
  <a
    class="text-reset"
    href="http://saviomd.com/"
    rel="noreferrer"
    target="_blank"
  >
    <Image
      alt="saviomd.com"
      height={14}
      src="https://saviomd.com/img/icon-192.png"
      width={14}
    />
    Sávio Mendes
  </a>
  <br />
  Powered by Svelte, Bootstrap, Font Awesome, Vite, GitHub Pages
</footer>
