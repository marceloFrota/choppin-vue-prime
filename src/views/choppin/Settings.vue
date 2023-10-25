<script setup>
import { ref } from 'vue';

const dropdownItems = ref([
    { name: 'Option 1', code: 'Option 1' },
    { name: 'Option 2', code: 'Option 2' },
    { name: 'Option 3', code: 'Option 3' }
]);

const multiselectValues = ref([
    { name: 'Australia', code: 'AU' },
    { name: 'Brazil', code: 'BR' },
    { name: 'China', code: 'CN' },
    { name: 'Egypt', code: 'EG' },
    { name: 'France', code: 'FR' },
    { name: 'Germany', code: 'DE' },
    { name: 'India', code: 'IN' },
    { name: 'Japan', code: 'JP' },
    { name: 'Spain', code: 'ES' },
    { name: 'United States', code: 'US' }
]);

const multiselectValue = ref(null);

const dropdownItem = ref(null);
const colorValue = ref('#1976D2');
const switchValue = ref(false);
</script>

<template>
    <div class="grid">
        <div class="col-12">
            <div class="card">
       <h5>Minha Loja</h5>
                    

                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label for="firstname2">Nome</label>
                        <InputText id="firstname2" type="text" />
                    </div>
                    <div class="field col-12 md:col-6">
                        <label for="lastname2">Status de Funcionamento</label>
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
                        <Dropdown id="state" v-model="dropdownItem" :options="dropdownItems" optionLabel="name" placeholder="Select One"></Dropdown>
                    </div>
                    <div class="field col-12 md:col-3">
                        <label for="zip">CEP</label>
                        <InputText id="zip" type="text" />
                    </div>
                    <div class="field col-12 md:col-6">
                        <h5>Cor da Loja</h5>
                        <ColorPicker style="width: 2rem" v-model="colorValue" />
                    </div>
                    <Button label="Salvar"></Button>
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
                <Button label="Salvar"></Button>
            </div>

            <div class="card p-fluid">
                <h5>Meios de Pagamento</h5>
                <div class="field">
                    <label for="name1">ID</label>
                    <InputText id="name1" type="text" />
                </div>
                <div class="field">
                    <label for="email1">Token</label>
                    <InputText id="email1" type="text" />
                </div>

                <Button label="Salvar"></Button>
            </div>
        </div>

        <div class="col-12 md:col-6">
            <div class="card p-fluid">
                <h5>Trocar Senha</h5>
                <div class="field">
                    <label for="password1" class="block text-900 font-medium text-xl mb-2">Nova Senha</label>
                    <Password id="password1" v-model="password" placeholder="Password" :toggleMask="true" class="w-full mb-3" inputClass="w-full" :inputStyle="{ padding: '1rem' }"></Password>
                </div>
                <div class="field">
                    <label for="password1" class="block text-900 font-medium text-xl mb-2">Confirmação de Senha</label>
                    <Password id="password1" v-model="password" placeholder="Password" :toggleMask="true" class="w-full mb-3" inputClass="w-full" :inputStyle="{ padding: '1rem' }"></Password>
                </div>

                <Button label="Salvar"></Button>
            </div>

            <div class="card p-fluid">
                <h5>Áreas de Funcionamento</h5>
                <div class="field">
                    <label for="state">Bairros</label>
                    <MultiSelect v-model="multiselectValue" :options="multiselectValues" optionLabel="name" placeholder="Select Countries" :filter="true">
                        <template #value="slotProps">
                            <div class="inline-flex align-items-center py-1 px-2 bg-primary text-primary border-round mr-2" v-for="option of slotProps.value" :key="option.code">
                                <span :class="'mr-2 flag flag-' + option.code.toLowerCase()" style="width: 18px; height: 12px" />
                                <div>{{ option.name }}</div>
                            </div>
                            <template v-if="!slotProps.value || slotProps.value.length === 0">
                                <div class="p-1">Select Countries</div>
                            </template>
                        </template>
                        <template #option="slotProps">
                            <div class="flex align-items-center">
                                <span :class="'mr-2 flag flag-' + slotProps.option.code.toLowerCase()" style="width: 18px; height: 12px" />
                                <div>{{ slotProps.option.name }}</div>
                            </div>
                        </template>
                    </MultiSelect>
                </div>
                <Button label="Salvar"></Button>
            </div>
        </div>
    </div>
</template>
