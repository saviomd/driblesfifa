<script lang="ts">
  import { Card, Icon } from "../library";
  import type { IPlayerLevel } from "../../types";
  export let axpNeeded: IPlayerLevel["axpNeeded"];
  export let axpNeededDiff: IPlayerLevel["axpNeeded"];
  export let cardColor: IPlayerLevel["rewards"]["cardUpgrade"];
  export let level: IPlayerLevel["level"];
  export let rewards: IPlayerLevel["rewards"];
  export let totalAp: IPlayerLevel["rewards"]["ap"];
</script>

<Card>
  <div class="row">
    <div class="col-4">
      <h2
        class={`bg-card-${cardColor} bg-gradient fw-bold h1 mb-0 py-4 rounded text-center text-light`}
      >
        {level}
      </h2>
    </div>
    <div class="col-8">
      <div class="mb-3">
        AXP needed
        <span class="fw-bold">{axpNeededDiff}</span>
        {#if axpNeeded}
          <span class="small">({axpNeeded})</span>
        {/if}
      </div>
      <div>
        Rewards
        <ul class="ps-3">
          <li>
            <span class="fw-bold">{rewards.ap}</span>
            AP
            <span class="small">({totalAp})</span>
          </li>
          {#if rewards.cardUpgrade}
            <li>
              <Icon color={`card-${cardColor}`} name="square" />
              Card Upgrade
            </li>
          {/if}
          {#if rewards.newSignaturePerk}
            <li>
              <Icon name="star" />
              New Signature Perk
            </li>
          {/if}
          {#if rewards.newPlayStyleSlot}
            <li>
              <Icon name="diamond" />
              New PlayStyle slot
            </li>
          {/if}
          {#if rewards.signaturePlayStyleUpgrade}
            <li>
              <Icon name="gem" />
              Signature PlayStyle Upgrade
            </li>
          {/if}
        </ul>
      </div>
    </div>
  </div>
</Card>
