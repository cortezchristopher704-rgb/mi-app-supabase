import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jrsbbjdubfkvbjkuevys.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impyc2JiamR1YmZrdmJqa3VldnlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc2ODE2NzksImV4cCI6MjA5MzI1NzY3OX0.RD7JbpBCW7tE2v-M6hxUjHVOnKFdhZ--Fi0NcXt5z8Q'

const supabase = createClient(supabaseUrl, supabaseKey)

async function obtenerEstudiantes() {
  const { data, error } = await supabase
    .from('Estudiantes')
    .select('*')

  if (error) {
    console.log('Error:', error)
  } else {
    console.log('Datos:', data)
  }
}

obtenerEstudiantes()
