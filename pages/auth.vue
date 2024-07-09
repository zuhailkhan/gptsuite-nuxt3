<template>
    <div class="w-full min-h-screen grid place-items-center">
        <Card class="max-w-[800px] w-full">
            <CardTitle>
                <div class="text-center py-4 font-bold text-3xl">
                    Welcome {{ ProjectTitle }}
                </div>
            </CardTitle>
            <CardContent>
                <Auth :supabaseClient="supabaseClient" :appearance="{
                    theme: ThemeSupa
                }" :providers="['github', 'google']" redirectTo="/" />
            </CardContent>
        </Card>
    </div>
</template>

<script setup lang="ts">
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { Auth } from '@nuxtbase/auth-ui-vue';

const ProjectTitle = ref<string>("GPTSuite");

definePageMeta({
    layout: 'home',
})

const supabaseClient = useSupabaseClient();
</script>

<style scoped></style>
