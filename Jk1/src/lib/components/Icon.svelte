<script>
  export let name = 'deck';
  export let size = 32;
</script>

<svg class="icon" width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
  {#if name === 'deck'}
    <path d="M10 44h44M12 34h40M16 24h32M20 14h24" />
    <path d="M14 50 54 10M24 52 56 20M8 38 34 12" />
  {:else if name === 'facade'}
    <path d="M14 10v44M24 10v44M34 10v44M44 10v44M54 10v44" />
    <path d="M10 54h48" />
  {:else if name === 'boards'}
    <path d="m12 42 36 10 4-16-36-10z" />
    <path d="m16 26 36-12 4 16-36 12" />
    <path d="M23 28 55 18M29 38l26-8M20 46l28-9" />
  {:else if name === 'drill'}
    <path d="M13 26h25l8 7-8 7H13z" />
    <path d="M38 26v-8h11v8M24 40v11h10V40" />
    <path d="M46 33h8" />
  {:else if name === 'planter'}
    <path d="M12 30h40l-4 22H16z" />
    <path d="M22 30c-4-10 0-16 8-18 1 8-2 14-8 18zM42 30c4-10 0-16-8-18-1 8 2 14 8 18zM32 30V12" />
  {:else if name === 'decoration'}
    <path d="M32 10v44M12 32h40" />
    <path d="m18 18 28 28M46 18 18 46" />
    <circle cx="32" cy="32" r="8" />
  {:else if name === 'quality'}
    <path d="M32 8 48 14v14c0 13-7 22-16 28-9-6-16-15-16-28V14z" />
    <path d="m22 32 7 7 15-17" />
  {:else if name === 'tools'}
    <path d="m12 50 17-17" />
    <path d="m25 22 17 17" />
    <path d="M42 12 30 24l10 10 12-12c4-4 4-8 2-12-4-2-8-2-12 2z" />
    <path d="m11 22 12 12" />
    <path d="M10 14h10v10" />
  {:else if name === 'custom'}
    <path d="M32 10c7 0 12 5 12 12S39 34 32 34 20 29 20 22 25 10 32 10z" />
    <path d="M14 54c3-10 10-16 18-16s15 6 18 16" />
  {:else if name === 'message'}
    <path d="M14 16h36v24H26L15 50l3-10h-4z" />
  {:else if name === 'quote'}
    <path d="M14 16h36v34H14z" />
    <path d="M22 26h20M22 34h20M22 42h12" />
  {:else if name === 'check'}
    <circle cx="32" cy="32" r="23" />
    <path d="m20 33 8 8 17-19" />
  {:else if name === 'phone'}
    <path d="M23 11 15 19c1 17 13 29 30 30l8-8-10-10-6 6c-7-3-11-7-14-14l6-6z" />
  {:else if name === 'mail'}
    <path d="M12 18h40v28H12z" />
    <path d="m12 20 20 16 20-16" />
  {:else if name === 'pin'}
    <path d="M32 56s17-17 17-31A17 17 0 0 0 15 25c0 14 17 31 17 31z" />
    <circle cx="32" cy="25" r="6" />
  {/if}
</svg>

<style>
  .icon {
    display: inline-block;
    stroke: currentColor;
    fill: none;
    stroke-width: 2.4;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
</style>
