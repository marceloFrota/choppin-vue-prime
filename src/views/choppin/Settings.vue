<script setup>
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';
import { santosNeighborhoods, brazilianStates } from '../../service/locations';

const dropdownItems = ref(brazilianStates);

const multiselectValues = ref(santosNeighborhoods);

const multiselectValue = ref(null);

const dropdownItem = ref(null);
const colorValue = ref('#1976D2');
const switchValue = ref(false);

const toast = useToast();

const showSuccess = () => {
    toast.add({ severity: 'success', summary: 'Success Message', detail: 'Message Detail', life: 3000 });
};
</script>

<template>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <h5>Minha Loja</h5>

                <Toast />
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label for="firstname2">Nome</label>
                        <InputText id="firstname2" type="text" />
                    </div>

                    <div class="flex flex-column justify-content-evenly">
                        <label for="">Status de Funcionamento</label>
                        <InputSwitch v-model="switchValue" />
                    </div>

                    <div class="field col-12">
                        <label for="address">Descrição</label>
                        <Textarea id="address" rows="4" />
                    </div>
                    <div class="field col-12 md:col-6">
                        <label for="city">Cidade</label>
                        <InputText id="city" type="text" />
                    </div>
                    <div class="field col-12 md:col-3">
                        <label for="state">Estado</label>
                        <Dropdown id="state" v-model="dropdownItem" :options="dropdownItems" optionLabel="name" placeholder="Selecione o Estado"></Dropdown>
                    </div>
                    <div class="field col-12 md:col-3">
                        <label for="zip">CEP</label>
                        <InputText id="zip" type="text" />
                    </div>
                    <div class="field col-12 md:col-6 flex flex-column justify-content-evenly">
                        <label>Cor da Loja</label>
                        <ColorPicker style="width: 2rem" v-model="colorValue" />
                    </div>
                    <Button @click="showSuccess()" label="Salvar"></Button>
                </div>
            </div>
        </div>
        <div class="col-12 md:col-6">
            <div class="card p-fluid">
                <h5>Meu Usuário</h5>
                <div class="field">
                    <label for="name1">Nome</label>
                    <InputText id="name1" type="text" />
                </div>
                <div class="field">
                    <label for="email1">Email</label>
                    <InputText id="email1" type="text" />
                </div>
                <div class="field">
                    <label for="age1">CNPJ</label>
                    <InputText id="age1" type="text" />
                </div>
                <Button @click="showSuccess()" label="Salvar"></Button>
            </div>

            <div class="card p-fluid">
                <h5>Meios de Pagamento</h5>
                <div class="field">
                    <label for="id">ID</label>
                    <InputText id="id" type="text" />
                </div>
                <div class="field">
                    <label for="token">Token</label>
                    <InputText id="token" type="text" />
                </div>

                <Button @click="showSuccess()" label="Salvar"></Button>
            </div>
        </div>

        <div class="col-12 md:col-6">
            <div class="card p-fluid">
                <h5>Trocar Senha</h5>
                <div class="field">
                    <label for="password1">Nova Senha</label>
                    <Password id="password1" placeholder="Senha" :toggleMask="true" class="w-full mb-3" inputClass="w-full" :inputStyle="{ padding: '1rem' }"></Password>
                </div>
                <div class="field">
                    <label for="password1">Confirmação de Senha</label>
                    <Password id="password1" placeholder="Senha" :toggleMask="true" class="w-full mb-3" inputClass="w-full" :inputStyle="{ padding: '1rem' }"></Password>
                </div>

                <Button @click="showSuccess()" label="Salvar"></Button>
            </div>

            <div class="card p-fluid">
                <h5>Áreas de Funcionamento</h5>
                <div class="field">
                    <label for="state">Bairros</label>
                    <MultiSelect v-model="multiselectValue" :options="multiselectValues" optionLabel="name" placeholder="Select Countries" :filter="true">
                        <template #value="slotProps">
                            <div class="inline-flex align-items-center py-1 px-2 bg-primary text-primary border-round mr-2" v-for="(option, index) of slotProps.value" :key="index">
                                <div>{{ option.name }}</div>
                            </div>
                            <template v-if="!slotProps.value || slotProps.value.length === 0">
                                <div class="p-1">Selecione o Bairro</div>
                            </template>
                        </template>
                    </MultiSelect>
                </div>
                <Button @click="showSuccess()" label="Salvar"></Button>
            </div>
        </div>
    </div>
</template>
