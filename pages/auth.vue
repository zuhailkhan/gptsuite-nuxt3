<template>
    <div class="w-full min-h-screen grid place-items-center">
        <Card class="max-w-[800px] w-full">
            <CardTitle>
                <div class="text-center py-4 font-bold text-3xl">
                    Welcome {{ ProjectTitle }}
                </div>
            </CardTitle>
            <CardContent>
                <!-- Supabase Auth Box Here -->
                Auth Box Here
            </CardContent>
        </Card>
    </div>
</template>

<script setup lang="ts">
/* 
    TicketID: AFT-001
    Problem: Had to remove supabase auth from the 
    reason: supabase auth wrapper for nuxt3 doesnt have type compliance
    evidence: https://github.com/nuxt-modules/supabase/issues/383
    solution: {
        message: Use supabase auth wrapper for JS Directly without any wrapper
        ticketID: AFT-002
    }
*/
const ProjectTitle = ref<string>("GPTSuite");

definePageMeta({
    layout: 'home',
})
</script>
