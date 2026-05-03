import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jrsbbjdubfkvbjkuevys.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impyc2JiamR1YmZrdmJqa3VldnlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc2ODE2NzksImV4cCI6MjA5MzI1NzY3OX0.RD7JbpBCW7tE2v-M6hxUjHVOnKFdhZ--Fi0NcXt5z8Q'

const supabase = createClient(supabaseUrl, supabaseKey)

const INSERTAR = true // ← cambia a true solo cuando quieras insertar

async function insertarEstudiante() {
  const { data, error } = await supabase
    .from('estudiantes')
    .insert([
      { nombre: 'Maria', carrera: 'Enfermería' }
    ])

  console.log('INSERT:', data, error)
}

async function obtenerEstudiantes() {
  const { data, error } = await supabase
    .from('estudiantes')
    .select('*')

  console.log('SELECT:', data, error)
}

if (INSERTAR) {
  await insertarEstudiante()
}

await obtenerEstudiantes()