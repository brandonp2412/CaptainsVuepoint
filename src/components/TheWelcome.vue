<script setup>
import WelcomeItem from "./WelcomeItem.vue";
import ElementsIcon from "./icons/ElementIcon.vue";
import TemplatesIcon from "./icons/TemplatesIcon.vue";
import ConditionsIcon from "./icons/ConditionsIcon.vue";
import RoutingIcon from "./icons/RoutingIcon.vue";
import InternetIcon from "./icons/InternetIcon.vue";
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <ElementsIcon />
    </template>
    <template #heading>Elements</template>

    What kind of things do we want to show our users?
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <TemplatesIcon />
    </template>
    <template #heading>Templates</template>

    Websites need to react to different variables
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ConditionsIcon />
    </template>
    <template #heading>Conditions</template>

    Showing & hiding content is very important in dynamic user experiences
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <RoutingIcon />
    </template>
    <template #heading>Routing</template>

    Websites consist of pages! Let's make some...
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <InternetIcon />
    </template>
    <template #heading>Internet connections</template>

    Our website can't hold all the answers, let's see how to get information
    across the web.
  </WelcomeItem>
</template>
