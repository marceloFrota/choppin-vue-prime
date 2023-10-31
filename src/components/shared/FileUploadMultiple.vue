
<template>
    <div class="card">
        <Toast />
        <FileUpload name="file[]" url="https://laravel.fastapp.cloud/upload" @upload="onAdvancedUpload($event)" :multiple="true" accept="image/*" :maxFileSize="1000000">
            <template #empty>
                <p>Arraste aqui arquivos para upload.</p>
            </template>
        </FileUpload>
    </div>
</template>

<script>
export default {
    methods: {
        onAdvancedUpload($event) {
            console.log($event);
            this.$toast.add({ severity: 'info', summary: 'Successo', detail: 'Upload de arquivo com sucesso', life: 3000 });
        }
    }
};
</script>



