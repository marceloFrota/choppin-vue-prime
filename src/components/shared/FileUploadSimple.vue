
<template>
    <div class="card flex justify-content-center">
        <Toast />
        <FileUpload mode="basic" name="file[]" url="https://laravel.fastapp.cloud/upload" accept="image/*" :maxFileSize="1000000" @upload="onUpload" />
    </div>
</template>

<script>
export default {
    methods: {
        onUpload() {
            this.$toast.add({ severity: 'info', summary: 'Successo', detail: 'Upload de arquivo com sucesso', life: 3000 });
        }
    }
};
</script>
