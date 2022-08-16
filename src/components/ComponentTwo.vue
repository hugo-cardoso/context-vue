<script setup lang="ts">
import { useUser } from "../contexts/User";

const userContext = useUser();
</script>

<template>
  <div class="card">
    <div class="card-content">
      <div class="content">
        <p>
          <strong>First Name:</strong> {{ userContext.state.firstName }}
        </p>
        <p>
          <strong>Last Name:</strong> {{ userContext.state.lastName }}
        </p>
        <p>
          <strong>Full Name:</strong> {{ userContext.getters.fullName.value }}
        </p>
        <p>
          <strong>Email</strong> {{ userContext.state.email }}
        </p>
      </div>
    </div>
  </div>
</template>
