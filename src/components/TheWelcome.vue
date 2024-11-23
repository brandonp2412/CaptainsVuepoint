<script setup>
import WelcomeItem from "./WelcomeItem.vue";
import ElementsIcon from "./icons/ElementIcon.vue";
import TemplatesIcon from "./icons/TemplatesIcon.vue";
import ConditionsIcon from "./icons/ConditionsIcon.vue";
import RoutingIcon from "./icons/RoutingIcon.vue";
import InternetIcon from "./icons/InternetIcon.vue";
import UserIcon from "./icons/UserIcon.vue";
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <ElementsIcon />
    </template>
    <template #heading>Elements</template>

    What kind of things do we want to
    <RouterLink to="/elements">show</RouterLink> our users?
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <TemplatesIcon />
    </template>
    <template #heading>Templates</template>

    Websites need to react to different
    <RouterLink to="/templates">variables</RouterLink>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ConditionsIcon />
    </template>
    <template #heading>Conditions</template>

    <RouterLink to="/conditions">Showing & hiding</RouterLink> content is very
    important in dynamic user experiences
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <UserIcon />
    </template>
    <template #heading>User input</template>

    Getting and using <RouterLink to="/user-input">data</RouterLink> from our
    users is important
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <RoutingIcon />
    </template>
    <template #heading>Routing</template>

    Websites consist of <RouterLink to="/routing">pages</RouterLink>! Let's make
    some...
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <InternetIcon />
    </template>
    <template #heading>Internet connections</template>

    Our website can't hold all the answers, let's see how to
    <RouterLink to="/internet"> get information across the web </RouterLink>.
  </WelcomeItem>
</template>
