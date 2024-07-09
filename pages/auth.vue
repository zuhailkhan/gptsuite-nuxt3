<template>
    <div>
        <Auth :supabaseClient="supabaseClient" :appearance="{
            theme: ThemeSupa,
        }" />
    </div>
</template>

<script setup lang="ts">
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { Auth } from '@nuxtbase/auth-ui-vue';

definePageMeta({
    layout: 'home',
})

const supabaseClient = useSupabaseClient();
</script>
