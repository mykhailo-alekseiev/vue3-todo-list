<template>
	<div>
		UserProfile
		{{ email }}
		<br />
		{{ id }}
		<br />
		{{ username }}
	</div>
</template>

<script setup lang="ts">
import { useUserModel } from '@/entities/user';

useHead({
	title: 'User profile',
});

const { email, id, username } = storeToRefs(useUserModel());

await useUserModel().fetchUser();
</script>
